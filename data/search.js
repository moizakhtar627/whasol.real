/* ============================================================
   WhaSol Shared Search Engine
   Token-based matcher over WHASOL_ARTICLES (data/articles.js).

   Load AFTER data/articles.js on every page that needs search:
     <script src="data/articles.js"></script>
     <script src="data/search.js"></script>

   Exposes:
     window.WHASOL_SEARCH.search(query, articles) -> ranked array
     window.WHASOL_SEARCH.top(query, articles)    -> best match or null
     window.WHASOL_SEARCH.tokenize(query)         -> meaningful tokens
   ============================================================ */
(function () {
  'use strict';

  var STOPWORDS = {
    'a': 1, 'an': 1, 'and': 1, 'are': 1, 'can': 1, 'do': 1, 'does': 1,
    'for': 1, 'from': 1, 'how': 1, 'in': 1, 'is': 1, 'it': 1, 'my': 1,
    'of': 1, 'on': 1, 'or': 1, 'that': 1, 'the': 1, 'to': 1, 'why': 1,
    'with': 1, 'won': 1, 'would': 1, 'your': 1
  };

  function normalize(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&/g, ' ')
      .replace(/[-/|]/g, ' ')
      .replace(/[^a-z0-9\u00C0-\u00FF\s.#+()]/g, ' ');
  }

  function tokenize(query) {
    var seen = {};
    return normalize(query).split(/\s+/).filter(function (token) {
      if (!token) return false;
      if (STOPWORDS[token]) return false;
      if (seen[token]) return false;
      seen[token] = true;
      return true;
    });
  }

  function categoryLabel(key) {
    var cats = window.WHASOL_CATEGORIES || [];
    for (var i = 0; i < cats.length; i++) {
      if (cats[i].key === key) return cats[i].label;
    }
    return '';
  }

  /* Precompute a weighted token map per article. */
  function buildWeightMap(article) {
    var map = {};
    function add(text, weight, keepPhrase) {
      normalize(text).split(/\s+/).forEach(function (token) {
        if (!token) return;
        map[token] = (map[token] || 0) + weight;
      });
      if (keepPhrase && text) {
        var phrase = normalize(text);
        if (phrase.indexOf(' ') !== -1) {
          map['__phrase__' + phrase] = (map['__phrase__' + phrase] || 0) + weight;
        }
      }
    }
    add(article.title, 5, true);
    add(article.brand, 4, true);
    (article.tags || []).forEach(function (tag) { add(tag, 4, false); });
    add(article.category, 3, false);
    add(categoryLabel(article.category), 2, false);
    add(article.slug, 3, false);
    add(article.excerpt, 1, false);
    return map;
  }

  function scoreArticle(map, tokens, query) {
    var score = 0;
    var matched = 0;
    for (var i = 0; i < tokens.length; i++) {
      if (map[tokens[i]]) {
        score += map[tokens[i]];
        matched++;
      }
    }
    /* Whole-query phrase boost (title/brand matches weighted highest). */
    if (query) {
      score += (map['__phrase__' + normalize(query)] || 0) * 2;
    }
    return { score: score, matched: matched };
  }

  function search(query, articles) {
    var tokens = tokenize(query);
    if (!tokens.length) return [];
    var results = [];
    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var res = scoreArticle(buildWeightMap(article), tokens, query);
      /* AND semantics: every meaningful token must appear somewhere.
         Pure stop-word or empty queries return []. */
      if (res.matched === tokens.length) {
        article.__score = res.score;
        results.push(article);
      }
    }
    results.sort(function (a, b) { return (b.__score || 0) - (a.__score || 0); });
    return results;
  }

  function top(query, articles) {
    var results = search(query, articles);
    return results.length ? results[0] : null;
  }

  window.WHASOL_SEARCH = {
    tokenize: tokenize,
    search: search,
    top: top
  };
})();