



loadform = function() {
	$("#form0 input[type=submit]").on("click", function (e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var action = $(this).val();
		$("#form0").append($(document.createElement("input")) 
			.attr("type", "hidden") .attr("name",'action') .val(action));
		var username = $('#username').val();
		var password = $('#password').val();
		var dat = {
			username: username,
			password: password
		}
                $.ajax({
                        url: '/cgi-bin/check_credentials',
			data: dat,
			type: 'POST',
                        success: function( response ) {
                                if (response) {
					$("#form0").append($(document.createElement("input"))
			                        .attr("type", "hidden") .attr("name",'publickey') .val(response));
					$("#form0").append($(document.createElement("input"))
                                                .attr("type", "hidden") .attr("name",'username') .val(username));
					$("#form0").append($(document.createElement("input"))
                                                .attr("type", "hidden") .attr("name",'password') .val(password));
					$("#form0").submit();
				}
                                else { 
					var d = new Date();
					var n = d.toUTCString(); 
					$('#alert').
					replaceWith("<span id='alert'>The username or password is not valid. " + n + "</span>"); }
				loadform();
                        }
                });
                return false;
	});
}
	

$(document).ready(function() { loadform(); });
