((function() {
  window.onload = function() {
    var video = document.getElementById('start-video');
    video.loop = false;
    video.addEventListener('ended', function() {
      //$('.start').remove();
      //window.location.href = 'http://www.baidu.com';
    }, false);
  }

  $('.jump').on('click', function () {
    $('.start').remove();
  })

})());
