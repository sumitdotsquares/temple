$.ajax({
	url: '/cgi-bin/get_fp_news',
	success: function(html) {
    $('#events-placeholder').replaceWith(html);
	}
});

