



  $('#autofill li, .cards li').each(function() {
    var $this = $(this),
        gs = $this.find('.person-gs').val(),
        citations = $this.find('.citations-autofill'),
        hIndex = $this.find('.h-index-autofill'),
        i10Index = $this.find('.i10-index-autofill');

    $.ajax({
      url: '/cgi-bin/get_gs_data?gs=' + encodeURIComponent(gs),
      dataType: 'json',
      success: function(data) {
        citations.html(data.citations.count);
        hIndex.html(data.statistics.hIndex);
        i10Index.html(data.statistics.i10Index);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $this.remove();
        console.log("Error building scholar profile for e-mail " +  email + ": " + textStatus + errorThrown);
      }
    });
  });
