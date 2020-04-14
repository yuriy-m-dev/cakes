$(function(){
    $('.booking__selection-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.png"></button>',
        asNavFor: '.booking__selection-slider-nav',
        responsive: [
            {
                breakpoint: 766,
                settings: {
                    arrows: false,
                    dots: true,
                    fade: true
                }
            }
        ]
    });

    $('.booking__selection-slider-nav').slick({
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.booking__selection-slider',
        fade: true
    });

    // Слайдер оформления
    $('.booking__decor-slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.png"></button>',
        asNavFor: '.booking__decor-slider-nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.booking__decor-slider-nav').slick({
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.booking__decor-slider',
        fade: true,
    });


    // Selection
    let stuffingBtn = document.querySelectorAll('.booking__btn'),
        weightBtn = document.querySelectorAll('.booking__col-weight'),
        decorBtn = document.querySelectorAll('.booking__decor');

    for (let i = 0; i < stuffingBtn.length; i++) {
        stuffingBtn[i].addEventListener('click', clickStuffing);
    };

    function clickStuffing() {
        let stuffing = this.getAttribute('data-stuffing');
        document.querySelector('.booking__form-stuffing input').value = stuffing;
    };
    
    for (let i = 0; i < weightBtn.length; i++) {
        weightBtn[i].addEventListener('click', clickWeight);
    };

    function clickWeight() {
        let weight = this.getAttribute('data-weight');
        document.querySelector('.booking__form-size input').value = weight;
    };
    
    for (let i = 0; i < decorBtn.length; i++) {
        decorBtn[i].addEventListener('click', clickDecor);
    };

    function clickDecor() {
        let decor = this.getAttribute('data-decor');
        document.querySelector('.booking__form-decor input').value = decor;
    };
    // end Selection

    $('.reviews__slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.png"></button>',
        asNavFor: '.reviews__slider-nav',
        responsive: [
            {
                breakpoint: 761,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.reviews__slider-nav').slick({
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.reviews__slider',
        fade: true
    });

    // Гамбургер

    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
        $('.header__menu').slideToggle(function(){
            if ($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
    $('.header__menu-link').on('click', function() {
        let win = $(window);
        if (win.width() <= 1000) {
            $(".hamburger").removeClass('is-active');
            $('.header__menu').css('display', 'none');
        }
    });

    // Перемещение элемента
    $(window).on('resize', function(){
        let win = $(this);
        if (win.width() <= 450) {
            $('.about__social').detach().appendTo('.about__inner');
        } else {
            $('.about__social').detach().appendTo('.about__info');
        }

        let win_2 = $(this);
        if (win_2.width() <= 450) {
            $('.about__info-title').detach().appendTo('.about__inner');
        } else {
            $('.about__info-title').detach().prependTo('.about__info');
        }

        let win_3 = $(this);
        if (win_3.width() <= 900) {
            $('.footer-top__social').detach().appendTo('.footer-down__inner');
        } else {
            $('.footer-top__social').detach().appendTo('.footer-top__inner');
        }
    });
});

// Плавный скролл якоря
const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    };



// fixed header
    const header = document.querySelector('.header'),
          cake = document.querySelector('.cake');
    window.onscroll = () => {
        if(window.pageYOffset > 500) {
            header.classList.add('active');
            cake.classList.add('active');
        } else {
            header.classList.remove('active');
            cake.classList.remove('active');
        }
    }

