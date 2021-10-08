"use strict";

// -----------------------------------------------------------------------------------
// ----------------Click-Event-Start-------------------------------------------
var reponsive_menu = $('.reponsive_menu');
var btn_menu = $('.btn_menu');
var overlay_menu = $('.overlay_menu');
btn_menu.click(function (e) {
  reponsive_menu.css({
    'left': '0'
  });
  overlay_menu.css({
    'left': '0',
    'visibility': 'visible'
  }); // $('body').css({
  //   'margin-left':'300px',
  // })
});
overlay_menu.click(function () {
  reponsive_menu.css({
    'left': '-100%'
  });
  $(this).css({
    'left': '-100%',
    'visivility': 'hidden'
  }); // $('body').css({
  //   'margin-left':'0',
  // })
}); // ----------------Click-Event-End-------------------------------------------
// -------------------Slide-Start-----------------------

$(document).ready(function () {
  $('.slideshow_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    vertical: false
  });
}); // -------------------Slide-End------------------------------------------------------
// -----------------------------------------------------------------------------------
// -------------------Active-Menu-Start----------------------------

var list = document.getElementById("nav_active");
var listItem = list.getElementsByClassName("top_nav_list_item");

for (var i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} // -------------------Active-Menu-End----------------------------------
// ----------------------------------------------------------------------------------------------
// -------------------Active-Reponsive-Menu-Start----------------------------


var reponsive_menu_list = document.getElementById("reponsive_menu_nav_active");
var reponsive_menu_listItem = reponsive_menu_list.getElementsByClassName("reponsive_menu_top_nav_list_item");

for (var i = 0; i < reponsive_menu_listItem.length; i++) {
  reponsive_menu_listItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("reponsive_active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" reponsive_active", "");
    }

    this.className += " reponsive_active";
  });
}

function toggle() {
  var video = document.querySelector(".video");
  var video_demo = document.querySelector(".video_demo");
  video.classList.toggle("active");
} // ------------------Scroll-----------------


$(window).scroll(function () {
  var numberScroll = $(this).scrollTop(); // console.log(numberScroll);

  if (numberScroll > 90) {
    // console.log('them vao');
    $('.wrapper_section_a').addClass('wrapper_fixed');
    $('.main_header').addClass('go_fixed');
    $('.top_nav_list_item--link').addClass('link_fixed'); // $('.main_header').css({
    //   'position': 'fixed',
    //   'top': '0',
    //   'left': '0',
    //   'right': '0',
    //   'z-index': '909',
    //   'background-color': '#161616',
    // });
  } else {
    // console.log('tro ve nhu cu');
    $('.wrapper_section_a').removeClass('wrapper_fixed');
    $('.main_header').removeClass('go_fixed');
    $('.top_nav_list_item--link').removeClass('link_fixed'); // $('.main_header').css({
    //   'top': 'unset',
    //   'left': 'unset',
    //   'right': 'unset',
    //   'z-index': '1',
    //   'background-color': '#fff',
    // });
  }
});
$(document).on('click', '.background_footer_ellipse', function () {
  $('body').animate({
    scrollTop: 0
  }, 'fast');
});