/* ============================================================
   WhaSol Professional Animations — scroll reveal + page load
   Animation-only layer — no UI/design changes.
   Adds html.wha-anim gate: CSS only hides/reveals under this
   class, so if anything fails, content always stays visible.
   Runs on DOMContentLoaded so it works even on pages whose
   runtime scripts rebuild document.body.innerHTML first.
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var prefersReducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.documentElement.classList.add('wha-anim');
      return;
    }

    /* Enable the animation CSS rules. */
    document.documentElement.classList.add('wha-anim');

    /* --- Scroll reveal via Intersection Observer --- */
    var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-anim]'));

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
      addMicroInteractions();
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });

    setupFooterReveal();

    addMicroInteractions();

    /* --- Hover micro-interactions (additive classes only) --- */
    function addMicroInteractions() {
      document.querySelectorAll('article.group, [data-anim].group, article.flex.flex-col.justify-between').forEach(function (card) {
        if (!card.className || typeof card.className !== 'string') return;
        if (card.closest('nav')) return;
        if (card.className.indexOf('anim-card-hover') === -1) {
          card.classList.add('anim-card-hover');
        }
      });

      document.querySelectorAll('button, a[href], input[type="submit"]').forEach(function (btn) {
        if (!btn.className || typeof btn.className !== 'string') return;
        if (btn.closest('nav')) return;
        if (btn.className.indexOf('anim-btn-hover') === -1) {
          btn.classList.add('anim-btn-hover');
        }
      });

      document.querySelectorAll('a[href]').forEach(function (link) {
        if (!link.className || typeof link.className !== 'string') return;
        if (link.querySelector('.material-symbols-outlined') && link.className.indexOf('anim-arrow-hover') === -1) {
          link.classList.add('anim-arrow-hover');
        }
      });
    }

    /* --- Footer entrance reveal (premium footer, every page).
           Targets existing class hooks only — no HTML changes.
           Hidden only under the wha-anim gate set above; if JS or
           IntersectionObserver is unavailable, content stays visible. --- */
    function setupFooterReveal() {
      var footer = document.querySelector('footer');
      if (!footer) return;

      var units = [];

      var cta = footer.querySelector('.footer-cta-panel');
      if (cta) units.push(cta);

      var grid = footer.querySelector('.grid');
      if (grid) {
        Array.prototype.slice.call(grid.children).forEach(function (child) {
          if (child && child.tagName === 'DIV') units.push(child);
        });
      }

      var bottom = footer.querySelector('.pt-space-lg.border-t');
      if (bottom) units.push(bottom);

      if (!units.length) return;

      units.forEach(function (el, i) {
        el.classList.add('wha-footer-reveal');
        el.style.setProperty('--wha-foot-delay', (0.06 + i * 0.07).toFixed(2) + 's');
      });

      if (!('IntersectionObserver' in window)) {
        units.forEach(function (el) { el.classList.add('wha-footer-visible'); });
        return;
      }

      var fio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('wha-footer-visible');
            fio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

      units.forEach(function (el) { fio.observe(el); });
    }
  });
})();