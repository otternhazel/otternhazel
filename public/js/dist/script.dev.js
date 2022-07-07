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
  $('#burger-submenu').removeClass('active');
  $('#burger-menu').removeClass('active');
  $('.hamburger').removeClass('active');
}); // 點擊DIV時、不向上層冒泡。

$("#submenu").click(function (e) {
  e.stopPropagation();
}); //submenu
// 點擊按鈕時顯示或隱藏DIV

$("#find-product").click(function (e) {
  e.stopPropagation();
  $(this).siblings('#submenu').toggleClass('active');
}); //submenu toggle end
// 點擊DIV時、不向上層冒泡。

$(".hamburger").click(function (e) {
  e.stopPropagation();
}); //submenu
// 點擊DIV時、不向上層冒泡。

$("#burger-menu").click(function (e) {
  e.stopPropagation();
}); //burger-submenu end
// 點擊DIV時、不向上層冒泡。

$("#burger-submenu").click(function (e) {
  e.stopPropagation();
}); //burger-submenu end
// 點擊按鈕時顯示或隱藏DIV

$("#burger-find-product").click(function (e) {
  console.log(111);
  e.stopPropagation();
  $(this).siblings('#burger-submenu').toggleClass('active');
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

$('.hamburger').click(function () {
  $(this).toggleClass('active');
  $('#burger-menu').toggleClass('active');
}); //hamburger end

$(window).resize(function () {
  var viewWidth = $(window).width();

  if (viewWidth < 768) {
    $('#submenu').removeClass('active');
  } else {
    $('#burger-menu').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.burger-submenu').removeClass('active');
  }
});
$('.footer-menu-switch').click(function () {
  var viewWidth = $(window).width();

  if (viewWidth < 768) {
    $(this).siblings('dd').toggleClass('active');
  }
});
/* Sign in / Sign up */

$('#signUp').on('click', function () {
  console.log(111);
  $('#sign-In-Up').addClass("right-panel-active");
});
$('#signIn').on('click', function () {
  console.log(222);
  $('#sign-In-Up').removeClass("right-panel-active");
});
/* Sign in / Sign up end */

/* Shopping Cart */

var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  el.parent().children(".full-price").html(eq + "€");
  changeTotal();
}

function changeTotal() {
  var price = 0;
  $(".full-price").each(function (index) {
    price += parseFloat($(".full-price").eq(index).html());
  });
  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100;
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) * 100) / 100;

  if (price == 0) {
    fullPrice = 0;
  }

  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(".remove").click(function () {
  var el = $(this);
  el.parent().parent().addClass("removed");
  window.setTimeout(function () {
    el.parent().parent().slideUp('fast', function () {
      el.parent().parent().parent().remove();

      if ($(".product").length == 0) {
        if (check) {
          $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
        } else {
          $("#cart").html("<h1>請先加入商品</h1>");
        }
      }

      changeTotal();
    });
  }, 200);
});
$(".qt-plus").click(function () {
  $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
  var el = $(this);
  window.setTimeout(function () {
    changeVal(el);
  }, 150);
});
$(".qt-minus").click(function () {
  child = $(this).parent().children(".qt");

  if (parseInt(child.html()) > 1) {
    child.html(parseInt(child.html()) - 1);
  }

  var el = $(this);
  window.setTimeout(function () {
    changeVal(el);
  }, 150);
});
window.setTimeout(function () {
  $(".is-open").removeClass("is-open");
}, 1200);
$(".btn").click(function () {
  check = true;
  $(".remove").click();
});
/* Shopping Cart end */

$(window).on('load', function () {
  $('.loading-overlay').addClass('active');
});
$('.item-image-thumbnails img').on('click', function (e) {
  $('.main-item-image img').attr('src', $(this).attr('src'));
  $('.main-item-image img').parent().attr('href', $(this).attr('src'));
  $(this).parent().parent().addClass('active');
  $(this).parent().parent().siblings().removeClass('active');
}); //item-image-thumbnails end