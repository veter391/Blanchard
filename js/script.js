window.addEventListener('DOMContentLoaded', function () {
  // Swiper \\
  const swiperHero = new Swiper('.section-hero__slider-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    autoplay: {
      disableOnInteraction: false,
      delay: 7000,
    },
  });

  const swiperGallery = new Swiper('.section-gallery__slider-container', {
    slidesPerColumnFill: 'row',
    direction: 'horizontal',
    allowTouchMove: false,
    // If we need pagination
    pagination: {
      el: '.section-gallery__slider-pagination',
      type: 'fraction',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.section-gallery__slider-btn_next',
      prevEl: '.section-gallery__slider-btn_prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        allowTouchMove: true,
        spaceBetween: 25,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },
      431: {
        allowTouchMove: true,
        spaceBetween: 35,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      1024: {
        spaceBetween: 35,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      1200: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
      },
    },
  });

  const swiperEditions = new Swiper('.section-editions__slider-container', {
    slidesPerColumnFill: 'row',

    direction: 'horizontal',
    // If we need pagination
    pagination: {
      el: '.section-editions__slider-pagination',
      type: 'fraction',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.section-editions__slider-btn_next',
      prevEl: '.section-editions__slider-btn_prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 34,
        slidesPerView: 9,
        slidesPerGroup: 9,
      },
      431: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1025: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    }
  });

  const swiperProjects = new Swiper('.section-projects__slider-container', {
    spaceBetween: 50,
    slidesPerColumnFill: 'row',

    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.section-projects__slider-btn_next',
      prevEl: '.section-projects__slider-btn_prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },
      431: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1000: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    }

  });
  const swiperEvents = new Swiper('.section-events__slider-container', {
    slidesPerColumnFill: 'row',
    spaceBetween: 25,

    direction: 'horizontal',
    // Navigation arrows
    pagination: {
      el: ".swiper-events-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  });
  // buttons section-catalog
  var BtnBox = document.getElementById("catalog-btn-box");
  var btns = BtnBox.getElementsByClassName("section-catalog__language-item");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("section-catalog__language-active");
      current[0].className = current[0].className.replace(" section-catalog__language-active", "");
      this.className += " section-catalog__language-active";
    });
  }
  // buttons(index) section-catalog
  $('.section-catalog__language-item').on('click', function () {
    // index buttons (1,2,3,4,5)
    $('.section-catalog__list-container').removeClass('container-list-active');
    $('.section-catalog__paragraph').removeClass('catalog__paragraph-active');

    let myindex = $(this).index();
    $('.section-catalog__paragraph').eq(myindex).addClass('catalog__paragraph-active');

    if (myindex === 0) {
      $('.section-catalog__france-container').addClass('container-list-active');
    } else if (myindex === 1) {
      $('.section-catalog__german-container').addClass('container-list-active');
    } else if (myindex === 2) {
      $('.section-catalog__italian-container').addClass('container-list-active');
    } else if (myindex === 3) {
      $('.section-catalog__russian-container').addClass('container-list-active');
    } else if (myindex === 4) {
      $('.section-catalog__belgian-container').addClass('container-list-active');
    } else {
      $('.section-catalog__italian-container').addClass('container-list-active');
    }
  });
  // Yandex Maps
  ymaps.ready(init);
  function init() {
    if ($(window).width() <= 1200) {
      var mapi = [55.76, 37.618];
      var zoomi = 14;
    } if ($(window).width() <= 1024) {
      var mapi = [55.76, 37.618];
      var zoomi = 14;
    } if ($(window).width() <= 430) {
      var mapi = [55.76, 37.618];
      var zoomi = 13;
    } else {
      var mapi = [55.76, 37.64];
      var zoomi = 14;
    }

    var myMap = new ymaps.Map("map", {
      center: mapi,
      zoom: zoomi,
    });

    var myObject = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/maps-marker.png',
      iconImageSize: [20, 20],
      iconImageOffset: [-15, 0],
    });
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myObject);
  }
  // Validate form and mask(tel)
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)-999-99-99");

  im.mask(selector);

  new JustValidate('.section-contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: {
        required: 'Укажите ваше Имя*',
        minLength: '(Min) количество символов 2',
        maxLength: '(Max) количество символов 20',
      },
      tel: {
        required: 'Укажите ваш Телефон*',
        function: 'Введите верный номер*',
      },
    },
    submitHandler: function(form){
      console.log("Отправка запроса");
      $('.section-contacts__form-response').fadeIn();
      $('.section-contacts__btn').attr('disabled', true);
      let formData = new FormData(form);

      let req = new XMLHttpRequest();
      
      req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // internet explorer 11
          console.log(json);
          // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
          if (json.result == "success") {
            // Если сообщение отправлено
            console.log("Сообщение отправлено");
            $('.section-contacts__form-response').css('color', 'rgb(51, 139, 16)');
            $('.section-contacts__form-response').text('Сообщение отправлено!');
            $('.section-contacts__form-response').css('background-image', 'url(../img/no_error.jpg)');
            $('.section-contacts__btn').attr('disabled', false);
            $('.section-contacts__form-response').delay(3000).fadeOut(1000);
          } else {
            // Если произошла ошибка
            console.log("Ошибка. Сообщение не отправлено!");
            $('.section-contacts__form-response').css('color', 'red');
            $('.section-contacts__form-response').text('Ошибка. Сообщение не отправлено!');
            $('.section-contacts__form-response').css('background-image', 'url(../img/error.jpg)');
            $('.section-contacts__btn').attr('disabled', false);
            $('.section-contacts__form-response').delay(3000).fadeOut(1000);
          }
        // Если не удалось связаться с php файлом
        } else {
          console.log("Ошибка сервера. Номер: " + req.status);
          $('.section-contacts__form-response').css('color', 'red');
          $('.section-contacts__form-response').text("Ошибка сервера. Номер: " + req.status);
          $('.section-contacts__form-response').css('background-image', 'url(../img/error.jpg)');
          $('.section-contacts__btn').attr('disabled', false);
          $('.section-contacts__form-response').delay(3000).fadeOut(1000);
        }
      };

      req.open('POST', 'sendmail.php', true);
      req.send(formData);
      req.onerror = function() {
        console.log("Ошибка отправки запроса");
      };

      form.reset();
    }
  });
  //               **********************
  // ********************* JQuery ****************************
  //               **********************

  // header burger
  $('.header-burger').on('click', function () {
    $('.header-burger').toggleClass('burger-active');
  });
  //***header burger***
});

// header search
$('.header-form__btn-mobile').on('click', function () {
  if ($('.section-header__form').css('position') == 'relative') {
    $('.section-header__form').toggleClass('section-header__form-active');
  } else {
    $('.section-header__form').addClass('section-header__form-active');
    $('.search-hide').addClass('active');
  }
});
$('.search-hide').on('click', function () {
  $('.section-header__form').removeClass('section-header__form-active');
  $(this).removeClass('active');
});
$('.header-form__input-mobile').on('focus', function () {
  $('.header-form__btn-mobile').get(0).type = 'submit';
});


//*****header search*****

// header burger menu
$('.header-burger').on('click', function () {
  $('.header-nav').toggleClass('active');
});
//***header burger menu***

// hero search
$(document).ready(function ($) {

  $("#search , #search-mobil").on('click', function () {
    $(this).removeClass("header-form__input_outline");
    $(".header-form__btn").addClass("header-form__btn_light");

  }).blur(function () {
    $(this).addClass("header-form__input_outline");
    $(".header-form__btn").removeClass("header-form__btn_light");
  });
  //****hero search****

  // gallery select
  $(".custom-select").each(function () {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $('.section-gallery__option').attr("value") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
      template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });

  $(document).ready(function () {

    $("#menu").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".hero-btn").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });

    //gallery__paragraph-link
    $('.section-gallery__paragraph-link').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 1000);
      $('#header-entrance').addClass('focus-visible');
    });
    //****gallery__paragraph-link****

    //   gallery modal window
    $('.section-gallery__slide').on('click', function () {
      var ModalImg = $(this).children('.section-gallery__slide-img').attr('src');
      var ModalBackground = 'background-image: url(' + ModalImg + ');';
      $('html, body').animate({ scrollTop: $('#gallery').offset().top }, 1000);
      $('.section-gallery-modal-picture').attr('style', ModalBackground);
      $('.modal-fon').fadeIn();
      $('#ModalTitle').text($(this).data('modal-title'));
      $('#ModalSubtitle').text($(this).data('modal-subtitle'));
      $('#ModalDate').text($(this).data('modal-small'));
      $('#ModalText').text($(this).data('modal-text'));
      $('#ModalWindow').fadeIn().css('display', 'flex');
      $('#ModalCanceladdfocus').focus();
      $('html, body').css('overflow-y', 'hidden');
    });
    $('#ModalCancel').on('click', function () {
      $('#ModalWindow').fadeOut();
      $('.modal-fon').fadeOut();
      $('html, body').css('overflow-y', 'visible');
    }).blur(function(){
      $(this).focus();
    });
    //*****gallery modal window****

    // hero selects!!
    $(".section-header__link").on("click", function () {
      if ($(this).hasClass("section-header__link_active")) {
        $(this).removeClass("section-header__link_active");
        $(this).siblings(".section-header__dropdown-list").slideUp(0);
        $(".section-header__link").removeClass("fa-minus").addClass("fa-plus");
      } else {
        $(".section-header__link").removeClass("fa-minus").addClass("fa-plus");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        $(".section-header__link").removeClass("section-header__link_active");
        $(this).addClass("section-header__link_active");
        $(".section-header__dropdown-list").slideUp(0);
        $(this).siblings(".section-header__dropdown-list").slideDown(0);
      }
    });
    // ***hero selects***


    $(".section-catalog__buttons").on("click", function () {
      if ($(this).hasClass("active-acordion")) {
        $(this).removeClass("active-acordion");
        $(this).siblings(".section-catalog-accordion").slideUp(300);
        $(".section-catalog__buttons").removeClass("fa-minus").addClass("fa-plus");
      } else {
        $(".section-catalog__buttons").removeClass("fa-minus").addClass("fa-plus");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        $(".section-catalog__buttons").removeClass("active-acordion");
        $(this).addClass("active-acordion");
        $(".section-catalog-accordion").slideUp(300);
        $(this).siblings(".section-catalog-accordion").slideDown(300);
      }
    });

    // Links section catalog!!
    $('.section-catalog__accordion-item').click(function (event) {
      //remove all pre-existing active classes
      $('.catalog__link-active').removeClass('catalog__link-active');
      //add the active class to the link we clicked
      $(this).addClass('catalog__link-active');
      $('.section-catalog__left-title').text($('.catalog__link-active > .section-catalog__accordion-btn').text());

      let CatalogSmall = $('.catalog__link-active > .section-catalog__accordion-item-small').text();
      let CatalogDescription = $('.catalog__link-active > .section-catalog__accordion-item-description').text();
      let img = $('.catalog__link-active > .section-catalog__accordion-item-img').data('background');

      $('.section-catalog__left-description').text(CatalogSmall);
      $('.section-catalog__left-paragraph').text(CatalogDescription);
      $('.section-catalog__img').attr('src', img);

      // FOR LINKS
      //load the page that the link was pointing to
      // $('#content').load($(this).find(a).attr('href'));


      event.preventDefault();
    });

    $('.section-catalog__accordion-btn').on('click', function (e) {
      if (window.matchMedia('(max-width: 768px)').matches) {
        e.preventDefault();
        scrolldescription = $('.section-catalog__left-cnt').offset().top;
        $('html, body').animate({ scrollTop: scrolldescription - 15 }, 500);
      }
    });

    $("#events-btn").on("click", function () {
      $(".section-events__item").addClass("section-events__item-visible");
      $(this).css('display', 'none');
    });

    //editions checkbox mobil
    $('.section-editions__box-select').on('click', function () {
      if (window.matchMedia('(max-width: 430px)').matches){
        $(this).toggleClass('section-editions__box-select-active');
        $('.section-editions__item').toggleClass('activeflex');
      }
    });
    $(".section-editions__checkbox").on("click", function() {
      if (window.matchMedia('(max-width: 430px)').matches){
        if ($(this).is(":checked")) {
          $(this).parent().addClass('section-editions__item-active');
        } else {
          $(this).parent().removeClass('section-editions__item-active');
        }
      }
    });
    $('.section-editions__cancel').on('click', function () {
      $(this).parent().children('.section-editions__checkbox').click();
      $(this).parent().removeClass('section-editions__item-active');
    });
    //****editions checkbox****

    // edition slider btn press
    $('.section-editions__slide').keypress(function (e) {
      var key = e.which;
      if (key == 13)  // the enter key code
      {
        $(this).children('.btn').click();
      }
    });
    // edition slider **********

    // projects tooltips
    $('.section-projects__tooltip').on('click', function () {
      $(this).children('.section-projects__tooltip-hidden').toggleClass('tooltip-hidden-visible');

      $(this).blur(function () {
          $(this).children('.section-projects__tooltip-hidden').removeClass('tooltip-hidden-visible');
      });
    });
    // projects tooltips******

    // когда пользователь изменяет ее размеру!!!
    // Создаем медиа условие, проверяющее viewports на ширину менее 768 пикселей.
    $(window).on('resize',function(){
      if (window.matchMedia('(min-width: 430px)').matches) {
        $($('#JewishMuseum')).insertAfter($('.section-events__item:nth-child(2)'));
        $(".section-contacts__form-box").prependTo(".contacts-container");
        $(".section-contacts__form-description").prependTo(".section-contacts__form-box");
        $(".section-contacts__form-title").prependTo(".section-contacts__form-box");
      } if (window.matchMedia('(max-width: 768px)').matches) {
        $($('#JewishMuseum')).insertAfter($('.section-events__item:last-child'));
      } if (window.matchMedia('(max-width: 430px)').matches) {
        $("#map").prependTo(".contacts-container");
        $(".section-contacts__form-description").prependTo(".contacts-container");
        $(".section-contacts__form-title").prependTo(".contacts-container");
      }
      });
      if (window.matchMedia('(max-width: 768px)').matches) {
        $($('#JewishMuseum')).insertAfter($('.section-events__item:last-child'));
      } if (window.matchMedia('(max-width: 430px)').matches) {
        $("#map").prependTo(".contacts-container");
        $(".section-contacts__form-description").prependTo(".contacts-container");
        $(".section-contacts__form-title").prependTo(".contacts-container");
      }
    });// JQuery end
    
    
});

// сжатый js код!!
// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('X.2Y(\'4t\',8(){z 3X=y Z(\'.5-3Y-j\',{12:\'16\',3Z:t,40:\'41\',42:{43:t},44:{45:19,46:47,},});z 48=y Z(\'.5-W-j\',{2e:2,1H:\'1I\',12:\'16\',49:t,4a:t,3W:t,R:{2b:\'.5-W-R\',1j:\'2E\',},2r:{2t:\'.5-W-1b\',2x:\'.5-W-1h\',},1N:{1G:t,1Q:19,},2a:{2i:{m:25,q:1,p:1,2e:1,},2d:{m:35,q:2,p:2,},2Z:{m:35,q:2,p:2,},1p:{m:50,q:3,p:3,},},});z 4b=y Z(\'.5-1m-j\',{1H:\'1I\',12:\'16\',R:{2b:\'.5-1m-R\',1j:\'2E\',},2r:{2t:\'.5-1m-1b\',2x:\'.5-1m-1h\',},1N:{1G:t,1Q:19,},2a:{2i:{m:34,q:9,p:9,},2d:{m:34,q:2,p:2,},2D:{m:50,q:2,p:2,},4e:{q:2,p:2,m:50,},1p:{q:3,p:3,m:50,},}});z 4f=y Z(\'.5-2y-j\',{m:50,1H:\'1I\',12:\'16\',2r:{2t:\'.5-2y-1b\',2x:\'.5-2y-1h\',},1N:{1G:t,1Q:19,},2a:{2i:{m:20,q:1,p:1,2e:1,},2d:{q:2,p:1,m:34,},2D:{q:2,p:2,m:50,},3a:{q:2,p:2,m:50,},1p:{q:3,p:3,m:50,},}});z 4k=y Z(\'.5-4r-j\',{1H:\'1I\',m:25,12:\'16\',R:{2b:".4c-3l-R",3N:t,},1N:{1G:t,1Q:19,}});g 2R=17.3G("1q-11-3B");g 2c=2R.2X("5-1c-O");3J(g i=0;i<2c.2P;i++){2c[i].2Y("c",8(){g 2g=17.2X("5-1c-b");2g[0].2h=2g[0].2h.3M(" 5-1c-b","");6.2h+=" 5-1c-b"})}$(\'.5-1c-O\').d(\'c\',8(){$(\'.5-3T-j\').h(\'j-x-b\');$(\'.5-1D\').h(\'1D-b\');M J=$(6).3C();$(\'.5-1D\').3I(J).f(\'1D-b\');l(J===0){$(\'.5-3O-j\').f(\'j-x-b\')}v l(J===1){$(\'.5-3A-j\').f(\'j-x-b\')}v l(J===2){$(\'.5-2U-j\').f(\'j-x-b\')}v l(J===3){$(\'.5-3S-j\').f(\'j-x-b\')}v l(J===4){$(\'.5-3Q-j\').f(\'j-x-b\')}v{$(\'.5-2U-j\').f(\'j-x-b\')}});1R.1U(2O);8 2O(){l($(X).Y()<=1p){g 18=[55.1A,37.2f];g 1g=14}l($(X).Y()<=2Z){g 18=[55.1A,37.2f];g 1g=14}l($(X).Y()<=3F){g 18=[55.1A,37.2f];g 1g=13}v{g 18=[55.1A,37.4m];g 1g=14}g 2J=y 1R.4y("3e",{4s:18,57:1g});g 2K=y 1R.59([55.5a,37.5b],{},{5c:\'5d#32\',5e:\'1a/5f-5g.5h\',5j:[20,20],53:[-15,0]});2J.5k.5p(2K)}g 1W=17.5l("5t[1j=\'1Z\']");g 2N=y 5s("+7(2L)-2L-2M-2M");2N.5m(1W);y 52(\'.5-2n\',{4K:{1i:{1n:t,2I:2,2Q:20},1Z:{1n:t,8:(1i,1k)=>{z 1Y=1W.4w.4x();51 4z(1Y)&&1Y.2P===10}}},4B:{1i:{1n:\'Укажите ваше Имя*\',2I:\'(4C) количество символов 2\',2Q:\'(4E) количество символов 20\'},1Z:{1n:\'Укажите ваш Телефон*\',8:\'Введите верный номер*\'},},});$(\'.o-1J\').d(\'c\',8(){$(\'.o-1J\').V(\'1J-b\')});M 1V=0;M 21=0;z $2W=$(\'#2T-2V-3t\');z $2G=$(\'#2T-2V-4H\');$2W.d(\'C\',()=>{++1V;l(1V%2!==0)$(\'#1M-1E-1b\').c();v $(\'#1M-1E-1h\').c()});$2G.d(\'C\',()=>{++21;l(21%2!==0)$(\'#1M-1E-1b\').c();v $(\'#1M-1E-1h\').c()})});$(\'.o-1O-26\').d(\'c\',8(){l($(\'.5-I\').n(\'4L\')==\'4M\'){$(\'.5-I\').V(\'5-I-b\')}v{$(\'.5-I\').f(\'5-I-b\');$(\'.1K-28\').f(\'b\')}});$(\'.1K-28\').d(\'c\',8(){$(\'.5-I\').h(\'5-I-b\');$(6).h(\'b\')});$(\'.o-4O-26\').d(\'C\',8(){$(\'.o-1O-26\').4P(0).1j=\'4Q\'});$(\'.o-1J\').d(\'c\',8(){$(\'.o-4S\').V(\'b\')});$(17).1U(8($){$("#1K , #1K-4T").d(\'c\',8(){$(6).h("o-2F");$(".o-1O").f("o-2A")}).2j(8(){$(6).f("o-2F");$(".o-1O").h("o-2A")});$(".k-r").2C(8(){g 2B=$(6).w("G"),P=$(6).w("P"),1i=$(6).w("1i");g Q=\'<T G="\'+2B+\'">\';Q+=\'<1F G="k-r-1T">\'+$(\'.5-4X\').w("1k")+\'</1F>\';Q+=\'<T G="k-1P">\';$(6).N("F").2C(8(){Q+=\'<1F G="k-F \'+$(6).w("G")+\'" B-1k="\'+$(6).w("1k")+\'">\'+$(6).1d()+\'</1F>\'});Q+=\'</T></T>\';$(6).54(\'<T G="k-r-3v"></T>\');$(6).28();$(6).3U(Q)});$(".k-F:4Y-4W-1j").1X(8(){$(6).H(".k-1P").f("F-1X")},8(){$(6).H(".k-1P").h("F-1X")});$(".k-r-1T").d("c",8(){$(\'1d\').3t(\'c\',8(){$(".k-r").h("1S")});$(6).H(".k-r").V("1S");E.4V()});$(".k-F").d("c",8(){$(6).H(".k-r-3v").N("r").4U($(6).B("1k"));$(6).H(".k-1P").N(".k-F").h("3q");$(6).f("3q");$(6).H(".k-r").h("1S");$(6).H(".k-r").N(".k-r-1T").s($(6).s())});$(17).1U(8(){$("#4N").d("c","a",8(E){E.2o();g P=$(6).w(\'3n\'),S=$(P).33().S;$(\'27,1d\').24({23:S},36)});$(".5-4J-22").d("c","a",8(E){E.2o();g P=$(6).w(\'3n\'),S=$(P).33().S;$(\'27,1d\').24({23:S},36)});$(\'.5-4I-4G\').d(\'c\',8(){$(\'1d, 27\').24({23:0},3a);$(\'#o-4F\').f(\'C-1L\')});$(\'.5-2s\').d(\'c\',8(){g 3i=$(6).U(\'.5-2s-1a\').w(\'3h\');g 3j=\'3x-32: 4D(../\'+3i+\');\';$(\'#1y\').w(\'4A\',3j);$(\'#4v\').s($(6).B(\'1w-2u\'));$(\'#4Z\').s($(6).B(\'1w-5n\'));$(\'#5o\').s($(6).B(\'1w-3u\'));$(\'#5q\').s($(6).B(\'1w-s\'));$(\'#1y\').n(\'1s\',\'2H\').1f(1o).5r(0);$(\'#1y\').n(\'3w\',\'1z\');$(\'#39\').c();$(\'#39\').C()});$(\'#31\').d(\'c\',8(){$(\'#1y\').n(\'3w\',\'58(-56%)\')});$(".5-1C").d("c",8(){l($(6).2p("5-1B")){$(6).h("5-1B");$(6).1r(".5-29-x").1f(0);$(".5-1C").h("u-L").f("u-K")}v{$(".5-1C").h("u-L").f("u-K");$(6).N("i").h("u-K").f("u-L");$(".5-1C").h("5-1B");$(6).f("5-1B");$(".5-29-x").1f(0);$(6).1r(".5-29-x").3s(0)}});$(".5-1u").d("c",8(){l($(6).2p("b-1t")){$(6).h("b-1t");$(6).1r(".5-1q-2q").1f(1o);$(".5-1u").h("u-L").f("u-K")}v{$(".5-1u").h("u-L").f("u-K");$(6).N("i").h("u-K").f("u-L");$(".5-1u").h("b-1t");$(6).f("b-1t");$(".5-1q-2q").1f(1o);$(6).1r(".5-1q-2q").3s(1o)}});$(\'.5-1e-O\').c(8(E){$(\'.D-b\').h(\'D-b\');$(6).f(\'D-b\');$(\'.5-2k-2u\').s($(\'.D-b > .5-1e-11\').s());M 3y=$(\'.D-b > .5-1e-O-3u\').s();M 38=$(\'.D-b > .5-1e-O-2m\').s();M 1a=$(\'.D-b > .5-1e-O-1a\').B(\'3x\');$(\'.5-2k-2m\').s(3y);$(\'.5-2k-3P\').s(38);$(\'.5-3L\').w(\'3h\',1a);E.2o()});$("#3l-11").d("c",8(){$(".5-1v").f("5-1v-1L");$(6).n(\'1s\',\'1z\')});$(".5-1l").d("c",8(){l($(6).3E(":3D")){$(6).A().A().f(\'5-1x-b\')}v{$(6).A().A().h(\'5-1x-b\')}});$(".5-1l").d("C",8(){l($(6).2p("C-1L")){$(6).A().n(\'3k\',\'4q 4p g(--4o-4n)\')}}).2j(8(){$(\'.5-1l\').A().n(\'3k\',\'1z\')});$(\'.5-4l\').4j(8(e){g 3f=e.4i;l(3f==13){$(6).U(\'.11\').c()}});$(\'.5-2l\').d(\'c\',8(){$(6).U(\'.5-2l-2w\').n(\'3d\',\'1\').n(\'3c\',\'1L\');$(6).2j(8(){$(6).U(\'.5-2l-2w\').n(\'3d\',\'0\').n(\'3c\',\'2w\')})});l(X.3m(\'(3p-Y: 4h)\').3g){$($(\'.5-1v:4g-30(3)\')).4d($(\'.5-1v:4u-30\'))}l(X.3m(\'(3p-Y: 3K)\').3g){$("#3e").2z(".2v-j");$(".5-2n-2m").2z(".2v-j");$(".5-2n-2u").2z(".2v-j");$(\'.5-2s\').d(\'c\',8(){$(\'.5-3b-22\').n(\'3o-3z\',\'3H\');$(\'.5-W-3r\').n(\'1s\',\'1z\')});$(\'#31\').d(\'c\',8(){$(\'.5-3b-22\').n(\'3o-3z\',\'4R\');$(\'.5-W-3r\').n(\'1s\',\'2H\')});$(\'.5-2S-r\').d(\'c\',8(){$(6).V(\'5-2S-r-b\');$(\'.5-1x\').V(\'5i\')});$(\'.5-3R\').d(\'c\',8(){$(6).A().U(\'.5-3V-11\').U(\'.5-1l\').c();$(6).A().h(\'5-1x-b\')})}})});',62,340,'|||||section|this||function|||active|click|on||addClass|var|removeClass||container|custom|if|spaceBetween|css|header|slidesPerGroup|slidesPerView|select|text|true|fa|else|attr|list|new|const|parent|data|focus|catalog__link|event|option|class|parents|header__form|myindex|plus|minus|let|find|item|id|template|pagination|top|div|children|toggleClass|gallery__slider|window|width|Swiper||btn|direction||||horizontal|document|mapi|false|img|btn_next|catalog__language|html|catalog__accordion|slideUp|zoomi|btn_prev|name|type|value|editions__checkbox|editions__slider|required|300|1200|catalog|siblings|display|acordion|catalog__buttons|events__item|modal|editions__item|ModalWindow|none|76|header__link_active|header__link|catalog__paragraph|slider|span|enabled|slidesPerColumnFill|row|burger|search|visible|gallery|keyboard|form__btn|options|onlyInViewport|ymaps|opened|trigger|ready|numfocusone|selector|hover|phone|tel||numfocustwo|cnt|scrollTop|animate||mobile|body|hide|header__dropdown|breakpoints|el|btns|431|slidesPerColumn|618|current|className|320|blur|catalog__left|projects__tooltip|description|contacts__form|preventDefault|hasClass|accordion|navigation|gallery__slide|nextEl|title|contacts|hidden|prevEl|projects__slider|prependTo|form__btn_light|classes|each|769|fraction|form__input_outline|elemTwo|flex|minLength|myMap|myObject|999|99|im|init|length|maxLength|BtnBox|editions__box|slide|catalog__italian|page|elemOne|getElementsByClassName|addEventListener|1024|child|ModalCancel|image|offset|||1500||CatalogDescription|ModalCanceladdfocus|1000|gallery__right|visibility|opacity|map|key|matches|src|ModalImg|ModalBackground|outline|events|matchMedia|href|min|max|selection|buttons|slideDown|one|small|wrapper|transform|background|CatalogSmall|height|catalog__german|box|index|checked|is|430|getElementById|635px|eq|for|430px|catalog__img|replace|clickable|catalog__france|paragraph|catalog__belgian|editions__cancel|catalog__russian|catalog__list|after|editions__check|observeParents|swiperHero|hero__slider|loop|effect|fade|fadeEffect|crossFade|autoplay|disableOnInteraction|delay|10000|swiperGallery|updateOnWindowResize|observer|swiperEditions|swiper|insertAfter|1025|swiperProjects|nth|768px|which|keypress|swiperEvents|editions__slide|64|dark|purple|solid|2px|events__slider|center|DOMContentLoaded|last|ModalTitle|inputmask|unmaskedvalue|Map|Number|style|messages|Min|url|Max|entrance|link|two|gallery__paragraph|hero__container|rules|position|relative|menu|form__input|get|submit|455px|nav|mobil|val|stopPropagation|of|gallery__option|first|ModalSubtitle||return|JustValidate|iconImageOffset|wrap||101|zoom|translateX|Placemark|758463|601079|iconLayout|default|iconImageHref|maps|marker|png|activeflex|iconImageSize|geoObjects|querySelector|mask|subtitle|ModalDate|add|ModalText|fadeIn|Inputmask|input'.split('|'),0,{}))