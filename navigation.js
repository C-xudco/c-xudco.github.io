"use strict";
(() => {
  const header = document.querySelector('.global-header');
  if (!header) return;
  const navigation = header.querySelector('#global-navigation');
  const mobileToggle = header.querySelector('.global-mobile-toggle');
  const triggers = [...header.querySelectorAll('.global-trigger')];
  const panels = triggers.map(button => document.getElementById(button.getAttribute('aria-controls')));
  const mobileQuery = window.matchMedia('(max-width: 640px)');
  const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const exitTimers = new Map();
  let activeIndex = -1;
  let openReason = '';
  let closeTimer;
  let hoverTimer;
  let suppressFocusOpen = false;

  function clearPending() {
    clearTimeout(closeTimer);
    clearTimeout(hoverTimer);
  }

  function hidePanel(index, immediate = false) {
    const panel = panels[index];
    if (!panel) return;
    clearTimeout(exitTimers.get(panel));
    triggers[index].setAttribute('aria-expanded', 'false');
    panel.inert = true;
    panel.setAttribute('aria-hidden', 'true');
    panel.classList.remove('global-panel-visible');
    if (immediate || reducedMotion.matches) panel.hidden = true;
    else exitTimers.set(panel, setTimeout(() => { panel.hidden = true; exitTimers.delete(panel); }, 230));
  }

  function closePanel({ restoreFocus = false, immediate = false } = {}) {
    clearPending();
    const previous = activeIndex;
    activeIndex = -1;
    openReason = '';
    header.dataset.panelOpen = 'false';
    if (previous !== -1) {
      hidePanel(previous, immediate);
      if (restoreFocus) {
        suppressFocusOpen = true;
        triggers[previous].focus({ preventScroll: true });
        suppressFocusOpen = false;
      }
    }
  }

  function openPanel(index, reason = 'click', focusFirst = false) {
    clearPending();
    if (index < 0 || index >= panels.length || !panels[index]) return;
    if (activeIndex !== -1 && activeIndex !== index) hidePanel(activeIndex, true);
    activeIndex = index;
    openReason = reason;
    header.dataset.panelOpen = 'true';
    const panel = panels[index];
    clearTimeout(exitTimers.get(panel));
    exitTimers.delete(panel);
    panel.hidden = false;
    panel.inert = false;
    panel.setAttribute('aria-hidden', 'false');
    triggers[index].setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      if (activeIndex === index && !panel.hidden) panel.classList.add('global-panel-visible');
    });
    if (focusFirst) panel.querySelector('a, button')?.focus({ preventScroll: true });
  }

  function setMobileOpen(open, focusFirst = false) {
    clearPending();
    header.dataset.mobileOpen = String(open);
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
    navigation.inert = mobileQuery.matches && !open;
    if (!open) closePanel({ immediate: true });
    if (open && focusFirst) triggers[0]?.focus({ preventScroll: true });
  }

  triggers.forEach((button, index) => {
    button.addEventListener('pointerenter', event => {
      if (mobileQuery.matches || !hoverQuery.matches || event.pointerType === 'touch') return;
      clearPending();
      hoverTimer = setTimeout(() => openPanel(index, 'hover'), activeIndex === -1 ? 55 : 0);
    });
    button.addEventListener('focus', () => {
      if (!mobileQuery.matches && !suppressFocusOpen) openPanel(index, 'focus');
    });
    button.addEventListener('click', () => {
      if (activeIndex === index && (mobileQuery.matches || openReason === 'click')) closePanel();
      else openPanel(index, 'click');
    });
    button.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        openPanel(index, 'keyboard', true);
      } else if (!mobileQuery.matches && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? triggers.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + triggers.length) % triggers.length;
        triggers[next].focus({ preventScroll: true });
        openPanel(next, 'keyboard');
      }
    });
  });

  header.addEventListener('pointerenter', () => clearTimeout(closeTimer));
  header.addEventListener('pointerleave', event => {
    clearTimeout(hoverTimer);
    if (mobileQuery.matches || !hoverQuery.matches || event.pointerType === 'touch') return;
    closeTimer = setTimeout(() => {
      if (!header.contains(document.activeElement) || openReason === 'hover' || openReason === 'click') closePanel();
    }, 180);
  });
  header.addEventListener('focusin', () => clearTimeout(closeTimer));
  header.addEventListener('focusout', () => {
    setTimeout(() => {
      if (!header.contains(document.activeElement)) {
        closePanel();
        if (mobileQuery.matches) setMobileOpen(false);
      }
    }, 0);
  });
  mobileToggle.addEventListener('click', () => setMobileOpen(header.dataset.mobileOpen !== 'true', false));
  header.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    closePanel({ immediate: true });
    if (mobileQuery.matches) setMobileOpen(false);
  }));
  document.addEventListener('pointerdown', event => {
    if (!header.contains(event.target)) {
      closePanel();
      if (mobileQuery.matches) setMobileOpen(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (activeIndex !== -1) {
      event.preventDefault();
      const restore = header.contains(document.activeElement);
      closePanel({ restoreFocus: restore });
    } else if (mobileQuery.matches && header.dataset.mobileOpen === 'true') {
      event.preventDefault();
      setMobileOpen(false);
      mobileToggle.focus({ preventScroll: true });
    }
  });
  window.addEventListener('hashchange', () => {
    closePanel({ immediate: true });
    if (mobileQuery.matches) setMobileOpen(false);
  });
  function synchronizeLayout() {
    closePanel({ immediate: true });
    panels.forEach((_, index) => hidePanel(index, true));
    setMobileOpen(false);
    navigation.inert = mobileQuery.matches;
  }
  mobileQuery.addEventListener('change', synchronizeLayout);
  synchronizeLayout();
})();
