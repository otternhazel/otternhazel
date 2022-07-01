"use strict";

(function (d) {
  var config = {
    kitId: 'jfe6kfm',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document); //submenu toggle start


$("body").click(function () {
  $('#submenu').removeClass('active');
}); // 點擊DIV時、不向上層冒泡。

$("#submenu").click(function (e) {
  e.stopPropagation();
}); // 點擊按鈕時顯示或隱藏DIV

$("#find-product").click(function (e) {
  e.stopPropagation();
  $(this).siblings('#submenu').toggleClass('active');
}); //submenu toggle end

$('.thumbnails img').on('click', function (e) {
  // if( $(window).width()> 768){
  var pattenStr = 'thumbnails';
  var pathStr = 'banners';
  $('.main-img').attr('src', $(this).attr('src').replace(pattenStr, pathStr));
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active'); // } else {
  // }
}); //thumbnails>img end

$(".heart").on("click", function () {
  $(this).addClass('play-heart-animate');
}).on("animationend", function () {
  $(this).removeClass('play-heart-animate');
  $(this).toggleClass('selected');
}); //heart end

$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('#burger-menu').toggleClass('active');
  });
});
$(window).resize(function () {
  var viewWidth = $(window).width();

  if (viewWidth < 768) {} else {
    $('#burger-menu').removeClass('active');
    $('.hamburger').removeClass('active');
  }
});