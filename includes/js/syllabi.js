
function loadajax(year,semester,course,section){
	$.ajax({
        	url: '/cgi-bin/get_syllabi?year=' + year 
					+ '&semester=' + semester 
					+ '&course=' + course 
					+ '&section=' + section,
        	success: function(html) { 
			$("#place-holder").replaceWith(html); 
			MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			loadnext(); 
		}
	});
}

$(document).ready(function() { loadajax(); });

$("#viewlink").on("click", function () { loadajax(); });



function loadnext() {

$("#year").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	$("#semester").remove();
	$("#course").remove();
	$("#section").remove(); 
	$("#html").remove();
	loadajax(year);
});

$("#semester").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	var semester = $("#semester option:selected").val();
	$("#course").remove();
	$("#section").remove(); 
	$("#html").remove();
	loadajax(year,semester);
});

$("#course").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	var semester = $("#semester option:selected").val();
	var course = $("#course option:selected").val();
	$("#section").remove();
	$("#html").remove();
	loadajax(year,semester,course);
});

$("#section").change(function(e) {
	e.stopImmediatePropagation();
	var year = $("#year option:selected").val();
	var semester = $("#semester option:selected").val();
	var course = $("#course option:selected").val();
	var section = $("#section option:selected").val();
	$("#html").remove();
	loadajax(year,semester,course,section);
});

}

$('#createlink').click( function(e) {
	$.ajax( {
		url: '/cgi-bin/create_syllabi',
		success: function( response ) { 
			$("#response").replaceWith(response); 
			MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			loadform();
		}
	});
});



loadform = function() {
	$("#form0 input[type=submit]").on("click", function (e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var name = $(this).attr("name");
		var value = $(this).val();
		$("#form0")
			.append($(document.createElement("input"))
				.attr("type", "hidden")
				.attr("name", name)
				.val(value))
			.submit();
	});
	
	$("#form0").bind("submit", function (e) {
//        	var formdata = new FormData(this);
		var formdata = $(this).serialize();
        	$.ajax({
                	data: formdata,
                	type: 'POST',
                	url: '/cgi-bin/create_syllabi',
                	context: this,
//               	processData: false,
//                	contentType: false,
                	success: function( response ) { 
				$("#response").replaceWith(response); 
				MathJax.Hub.Queue(["Typeset",MathJax.Hub]); 
				loadform(); 
			}
        	});
        	return false;
	});
}




