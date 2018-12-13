window.onload = function() {
  document.querySelector('.page-header__title').style.left = '0px';
  document.querySelector('.page-header__descr').style.left = '0px';
  // document.querySelector('.page-header').style.backgroundPos = '0px';
};


$(document).ready(function(){

$('.popup').hide();

$('.promo__burger').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
});


// !!!!!!!!!!!!!!!SCROLL TO ANCHOR!!!!!!!!!!!!!


$(function(){
  $("a[href^='#']").click(function(){
    var hrefLink = $(this).attr("href");
    $("html, body").animate({scrollTop: $(hrefLink).offset().top}, 1000);
    return false;
  });
});


// !!!!!!!!!!!!!!SLIDER!!!!!!!!!!!!!!!!!!!!


$('.cakebox-list').owlCarousel ({
  dots: true,
  loop: true,
  center: true,
  nav: false,
  responsive : {
    0 : {
        items : 1,
    },
    767 : {
        items : 1,
        dots: false,
        nav: true,
        navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
    }
  }
});

$('.sizebox-list').owlCarousel ({
  loop: true,
  responsive : {
      0 : {
          items : 1,
      },
  }
});

$('.appearbox-list').owlCarousel ({
  loop: true,
  margin: 10,
  responsive : {
      0 : {
          items : 1,
      },
      767 : {
          items : 2,
          dots: false,
          nav: true,
          navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
      }
  }
});

$('.reviews__list').owlCarousel ({
  loop: true,
  dots: true,
  responsive : {
      0 : {
          items : 1,
      },
      950 : {
          items : 1,
          dots: false,
          nav: true,
          navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
      }
  }
});

$(window).width(function() {
  if ($(window).width() > 767) {
    $('.sizebox-list').trigger('destroy.owl.carousel');
  }
  else {
    return false;
  }
});

// !!!!!!!!!!POPUP!!!!!!!!!!!!!

$('.final-order__btn').on('click', function() {
  if ($('.choice-cakebox, .choice-sizebox, .choice-appearbox').html() == '') {
    alert('Выберите все параметры для заказа');
  }
  else {
    $('.popup').fadeIn(500);
  }
});

$('.popup-cancel__btn').on('click', function() {
  $('.popup').fadeOut(500);
});

// !!!!!!!!!!МАСКА ДЛЯ ВВОАД ТЕЛЕФОНА!!!!!!!!!!!!

$(function($){
  $("#phone").mask("(999) 999-9999");
});


// !!!!!!!!!!ВЫБОР КОМПОНЕНТОВ ДЛЯ ЗАКАЗА!!!!!!!!!!!!


$('.cakebox-block__btn').on('click', function() {
  $('.choice-cakebox').text($(this).prev('.cakebox-block').children('.cakebox-block__title').text().split('(')[0]);
});


$('.personal-sizebox').on('click', function() {
  $('.choice-sizebox').text($(this).children('.personal-sizebox__title').text().split('(')[0]);
});

$('.personal-sizebox__btn').on('click', function() {
  $('.choice-sizebox').text($(this).prev('.personal-sizebox').children('.personal-sizebox__title').text().split('(')[0]);
});


$('.personal-appearbox').on('click', function() {
  $('.choice-appearbox').text($(this).children('.personal-appearbox__title').text().split('(')[0]);
});

$('.personal-appearbox__btn').on('click', function() {
  $('.choice-appearbox').text($(this).prev('.personal-appearbox').prev('.personal-appearbox').children('.personal-appearbox__title').text().split('(')[0]);
});


// !!!!!!!!!!!!!!!!VISITED LINKS!!!!!!!!!!!!

$('.main-nav__link').on('click', function() {
  $(this).css({'color':'blue'});
});


// !!!!!!!!!!!!!!ВЫБОР КОМПОНЕНТОВ ПО КЛИКУ!!!!!!!!!!!!!!!!!!!!!!!

$('.personal-sizebox,.personal-appearbox').on('click', function() {
  $(this).children('i').toggleClass('.active');
  $(this).children('i').toggle();
})

});
