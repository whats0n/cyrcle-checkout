const BODY = $('body');

const inputs = $('.js-change-color');

inputs.each((i, input) => {

  input = $(input);
  const color = input.data('class');

  input.on('change', e => {
    e.preventDefault();
    BODY.attr('data-theme', color);
  });

});

inputs
  .prop('checked', false)
  .first()
  .prop('checked', true)
  .trigger('change');
