
$('#username').keyup(function() {
	var username = $('#username').val();
	$.ajax({
		url: '/cgi-bin/backup?username=' + username,
		success: function(response) { $('#path').replaceWith(response); }
	});
});
