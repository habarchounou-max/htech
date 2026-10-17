/* Hayata Technology — V6 accessible interaction layer */
(() => {
  'use strict';
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav-links');
  const closeMenu = () => {
    if (!burger || !menu) return;
    burger.classList.remove('open'); menu.classList.remove('open');
    burger.setAttribute('aria-expanded','false'); document.body.style.overflow='';
  };
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      document.querySelectorAll('.has-dd.open').forEach(item => {
        item.classList.remove('open');
        const trigger = item.querySelector('.dd-btn');
        if (trigger) trigger.setAttribute('aria-expanded','false');
      });
    }
  });
  document.querySelectorAll('.dd-btn').forEach(trigger => {
    trigger.setAttribute('aria-expanded','false');
    // main.js owns the open/close toggle; this listener mirrors its final state.
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.has-dd');
      trigger.setAttribute('aria-expanded', String(Boolean(parent && parent.classList.contains('open'))));
    });
    trigger.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const first = trigger.nextElementSibling?.querySelector('a');
        first?.focus();
      }
    });
  });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
  // Avoid running decorative animation work when the page is hidden or reduced motion is requested.
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.classList.toggle('reduced-motion', reduced.matches);
  reduced.addEventListener?.('change', event => document.documentElement.classList.toggle('reduced-motion', event.matches));
  // Add explicit accessible names to the icon-only top button and WhatsApp shortcut if markup is altered later.
  const top = document.querySelector('#toTop');
  if (top && !top.getAttribute('aria-label')) top.setAttribute('aria-label','Retour en haut de page');
})();
