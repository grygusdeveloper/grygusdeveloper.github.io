/* Make only overflowing data-table regions keyboard-focusable.
   Existing data, routing, and simulated action behavior are untouched. */
(() => {
  'use strict';
  const main = document.getElementById('main');
  if (!main) return;
  const observed = new Set();
  let pending = false;
  const resize = typeof ResizeObserver === 'function'
    ? new ResizeObserver(schedule)
    : null;

  function sync() {
    pending = false;
    for (const el of observed) {
      if (!el.isConnected) {
        resize?.unobserve(el);
        observed.delete(el);
      }
    }
    for (const el of main.querySelectorAll('.table-scroll')) {
      if (!observed.has(el)) {
        observed.add(el);
        resize?.observe(el);
      }
      const overflows = el.scrollWidth > el.clientWidth + 1
        || el.scrollHeight > el.clientHeight + 1;
      if (overflows) {
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'region');
        const heading = el.closest('section')?.querySelector('h2')?.textContent;
        el.setAttribute('aria-label', (heading || 'Data table') + ' — scrollable');
      } else {
        el.removeAttribute('tabindex');
        el.removeAttribute('role');
        el.removeAttribute('aria-label');
      }
    }
  }
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(sync);
  }
  new MutationObserver(schedule).observe(main, {childList: true, subtree: true});
  addEventListener('resize', schedule, {passive: true});
  document.fonts?.ready.then(schedule);
  schedule();
})();
