
$( function() {
  var form = $('#email');

  $('#submit').click( function() {
    $.ajax( {
      type: form.attr( 'method' ),
      url: form.attr( 'action' ),
      data: form.serialize(),
      success: function( response ) { $("#response").replaceWith(response); }
    } );
  } );

} );


$(document).pjax('a', '#grid');

$.pjax.defaults.timeout = 20000;

$(document).on('pjax:complete', function() { window.history.replaceState(null,null, "/contact/"); } )


