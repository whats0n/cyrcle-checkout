const OPEN = 'is-open';
const control = $('.js-nav-control');
const container = $('.js-nav');
const DOC = $(document);
let active = false;

control.on('click', e => {
  e.preventDefault();
  container.toggleClass(OPEN);
  active = !active;
});

DOC.on('click', e => {
  const target = $(e.target);
  if (!active || target.closest(control).length || target.closest(container).length) return;
  container.removeClass(OPEN);
  active = false;
});
