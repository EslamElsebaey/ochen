$(window).on("load", function () {
  $(".preloader").fadeOut();

  // Sal Animation
  sal({
    once: true,
  });

  // Services Swiper

  const servicesSwiper = new Swiper(".services .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    pagination: {
      el: ".services .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });

  // Products Swiper

  const productsSwiper = new Swiper(".products .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    pagination: {
      el: ".products .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });

  // clients swiper
  const clientsSwiper = new Swiper(".clients .swiper", {
    loop: true,
    autoplay: true,
    speed: 1000,
    pagination: {
      el: ".clients .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: 35,
      },
    },
  });
});

$(document).ready(function () {
  // Common Questions

  $(".main-question").on("click", function () {
    $(this).children(".ques-answer").slideToggle(300);
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".ques-answer").not($(this).children(".ques-answer")).slideUp(300);
  });

  /**************************************************************************************************** */

  // open and close sideBar

  $(".open-nav-btn").click(function () {
    $(".navigation").addClass("reset-left");
    $("body").addClass("overflow-hidden");
  });
  $(".close-nav-btn").click(function () {
    $(".navigation").removeClass("reset-left");
    $("body").removeClass("overflow-hidden");
  });

  /************************************************************************************************** */

  // Overlay on products & servicea items

  $(window).scroll(function () {
    var windowScrollTop = $(window).scrollTop();
    var myproducts = $("#myproducts").length && $("#myproducts").offset().top;
    var myservices = $("#myservices").length > 0 && $("#myservices").offset().top;

    if (windowScrollTop > myproducts) {
      $("#myproducts .item-img-holder").addClass("move-bg");
    }
    if (windowScrollTop > myservices) {
      $("#myservices .item-img-holder").addClass("move-bg");
    }
  });

  /************************************************************************************************** */

  // open language in mobile

  // if ($(window).width() < 992) {
  //   $(".lang-close-holder-mob .img-text").click(function () {
  //     $(".lang-details").slideToggle(300);
  //     $(".lang-text .icon").toggleClass("rotate-icon");
  //   });
  // }

  /************************************************************************************************** */

  // totop Button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  /************************************************************************************************** */

  // nav nested menu

  if ($(window).width() <= 992) {
    $(".menu-item-has-children").click(function () {
      $(this).children(".sub-menu").slideToggle(300);
      $(this).children("a").toggleClass("icon-rotate");
      $(".menu-item-has-children")
        .not($(this))
        .children(".sub-menu")
        .slideUp(300);
      $(".menu-item-has-children")
        .not($(this))
        .children("a")
        .removeClass("icon-rotate");
    });
  }

  /************************************************************************************************** */

  // fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("fixed-header");
    }
    if ($(window).scrollTop() == 0) {
      $("header").removeClass("fixed-header");
    }
  });

  /************************************************************************************************** */

  //  nested menus in footer

  if ($(window).width() < 768) {
    $(".footer-title").click(function () {
      $(this).next(".quick-drop").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".quick-drop").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }
}); // End document ready
