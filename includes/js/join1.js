
var files = null;

$("input[type=file]").on("change", function (e) {
     files = e.target.files;
});

$("#upload").bind("submit", function (e) {
	var formdata = new FormData(this);
	if (files !== null) {
		$.each(files, function (k, v) { formdata.append(k, v); });
	}
	$.ajax({
        	data: formdata,
		type: 'POST',
		url: '/cgi-bin/join',
        	context: this,
        	processData: false,
        	contentType: false,
        	success: function( response ) { $("#response").replaceWith(response); }
    	});
	return false;
});

