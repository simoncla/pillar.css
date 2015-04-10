$('#mobile').click(function(e) {
    e.preventDefault();
  $('#phantom').attr('width', '460em');
  // $('html').attr('style', 'max-width: 480px; margin: 0 auto;');
});

$('#tablet').click(function(e) {
    e.preventDefault();
  $('#phantom').attr('width', '768px');
  // $('html').attr('style', 'max-width: 768px; margin: 0 auto;');
});

$('#desktop').click(function(e) {
    e.preventDefault();
  $('#phantom').attr('width', '1400px');
  // $('html').attr('style', 'max-width: auto; margin: 0 auto;');
});