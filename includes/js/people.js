

$(document).pjax('a', '#grid');

$.pjax.defaults.timeout = 20000;

$(document).on('pjax:complete', function() { window.history.replaceState(null,null, "/people/"); MathJax.Hub.Queue(["Typeset",MathJax.Hub]); } )