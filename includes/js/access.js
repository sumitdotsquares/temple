
$("#form0").bind("submit", function (e) {
        var formdata = new FormData(this);
        $.ajax({
                data: formdata,
                type: 'POST',
                url: '/~it/cgi-bin/access',
                context: this,
                processData: false,
                contentType: false,
                success: function( response ) { $("#response").replaceWith(response); }
        });
        return false;
});
