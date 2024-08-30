
function loadajax(year,semester,course,complete){
	$.ajax({
        	url: '/cgi-bin/get_your_grade?year=' + year 
					+ '&semester=' + semester 
					+ '&course=' + course
					+ '&status=' + complete,
        	success: function(html) { $("#place-holder").replaceWith(html); loadnext(); }
	});
}

$(document).ready(function() { loadajax(); });

function loadnext() {

$("#year").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	$("#semester").remove();
	$("#course").remove();
	$("#html").remove();
	loadajax(year);
});

$("#semester").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	var semester = $("#semester option:selected").val();
	$("#course").remove();
	$("#html").remove();
	loadajax(year,semester);
});

$("#course").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	var semester = $("#semester option:selected").val();
	var course = $("#course option:selected").val();
	$("#html").remove();
	loadajax(year,semester,course);
});

var form = $('#grade');


  $('#submit').click( function() {
    $.ajax( {
      type: form.attr( 'method' ),
      url: form.attr( 'action' ),
      data: form.serialize(),
      success: function( response ) { $("#response").replaceWith(response); }
    } );
  } );

}

