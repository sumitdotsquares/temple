/* Site-wide JS */

/* The hoverable secondary nav */
$('.nav-main li').each(function() {
  var $this = $(this),
      id = $this.attr('id'),
      hovermenuId = id + '-mouseover',
      hovermenu = $('#' + hovermenuId);

  $this
    .mouseenter(function() { hovermenu.removeClass('hidden') })
    .mouseleave(function() { hovermenu.addClass('hidden' )});
});
$('.moused').hover(
  function() {
    $(this).removeClass('hidden');
  },
  function() {
    $(this).addClass('hidden');
  }
);

/* Clickable items */
$('.clickable').click(function() {
  var $this = $(this),
      target = $this.attr('data-click-target'),
      where = $this.hasClass('open-here') ? '_self' : '_blank';

  window.open(target, where);
});

/* Scrolling */
$('.smooth-scroll').click(function() {
  var targetID = $(this).attr('href'),
      targetElement = $(targetID);

  $('html,body').animate({
    scrollTop: targetElement.offset().top
  }, 'slow');
});

/* Form submission */
$('.check-required').click(function() {
  var fieldsFilled = true;
  $('.required').each(function() {
    if (!$(this).val()) fieldsFilled = false;
  });

  if (!fieldsFilled) {
    sweetAlert("Missing fields...", "All fields are required", "error");
    return false;
  }
});

$('.countbox').each(function() {
  var box = $(this);
  var textarea = box.find('textarea');
  var count = box.find('.count');
  var max = count.val();

  var update = function() {
    var val = max - textarea.val().length;
    if (val < 0) {
      count.addClass('error');
    }
    else {
      count.removeClass('error');
    }

    count.val(val);
  };
  textarea.on('input', update);
  textarea.on('change', update);
});
