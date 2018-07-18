
$(document).ready(function() {
    $('select').selectpicker();
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        $(document).ready(function() {
            $(".product-light").lightSlider({
                gallery: true,
                item: 1
            });
        });
    } else {
        $(document).ready(function() {
            $(".product-light").lightSlider({
                gallery: true,
                item: 1,
                loop: true,
                slideMargin: 0,
                thumbItem: 4,
                vertical: true,
                verticalHeight: 485,
                vThumbWidth: 94,
                thumbMargin: 36
            });
        });
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction);

if ($(".main-slider")[0]){
    // swiper slider
    let mainSliderSelector = '.main-slider',
        navSliderSelector = '.nav-slider',
        interleaveOffset = 0.5;

// Main Slider
    let mainSliderOptions = {
        loop: true,
        speed:1000,
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheel: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function(){
                this.autoplay.stop();
            },
            imagesReady: function(){
                this.el.classList.remove('loading');
                this.autoplay.start();
            },
            progress: function(){
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function() {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                        speed + "ms";
                }
            }
        }
    };
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
    let navSliderOptions = {
        loop: true,
        loopAdditionalSlides: 10,
        speed: 1000,
        spaceBetween: 5,
        slidesPerView: 4,
        centeredSlides : true,
        touchRatio: 0.2,
        mousewheel: true,
        paginationClickable: true,
        slideToClickedSlide: true,
        // direction: 'vertical',
        on: {
            imagesReady: function(){
                this.el.classList.remove('loading');
            },
            click: function(){
                mainSlider.autoplay.stop();
            }
        }
    };
    let navSlider = new Swiper(navSliderSelector, navSliderOptions);

    // Matching sliders
    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;

    $('.nav-slider').on('hover', 'div.swiper-slide', function(){
        mainSlider.slideTo($(this).index(), 500);
    });
    // close swiper slider
}


$(document).ready(function() {
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

$(document).ready(function () {
    $("#range_48").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        to: 80,
        postfix: " руб",
    });
});

$(document).ready(function() {
    $('.product-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-nav',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {

                }
            },
            {
                breakpoint: 700,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

    // $(".product-nav").mousewheel(function(e) {
    //     e.preventDefault();
    //     if (e.originalEvent.deltaY > 0) {
    //         $(this).slick('slickNext');
    //     } else {
    //         $(this).slick('slickPrev');
    //     }
    // });

    // $('.product-nav').mouseover(function(e){
    //     $('.product-for').slick("slickNext");
    // });
});

$(document).ready(function() {
    $('.promo-product').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".promo-product").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
});

$(document).ready(function() {
    $('.slider-item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".slider-item").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
});

function buttonUp(){
    var valux = $('.sb-search-input').val();
    valux = $.trim(valux).length;
    if(valux !== 0){
        $('.sb-search-submit').css('z-index','99');
    } else{
        $('.sb-search-input').val('');
        $('.sb-search-submit').css('z-index','-999');
    }
}

$(document).ready(function(){
    var submitIcon = $('.sb-icon-search');
    var submitInput = $('.sb-search-input');
    var searchBox = $('.sb-search');
    var isOpen = false;

    $(document).mouseup(function(){
        if(isOpen == true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
        }
    });

    submitIcon.mouseup(function(){
        return false;
    });

    searchBox.mouseup(function(){
        return false;
    });

    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('sb-search-open');
            $('.nav--header').addClass('nav--none');
            isOpen = true;
        } else {
            searchBox.removeClass('sb-search-open');
            $('.nav--header').removeClass('nav--none');
            isOpen = false;
        }
    });

    submitInput.click(function(){
        searchBox.addClass('sb-search-open');
        $('.nav--header').addClass('nav--none');
        isOpen = true;
    });
});

$(document).ready(function(){
    $('.btn-number').click(function(e){
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {

                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if(parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if(type == 'plus') {

                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.promo-count__number').focusin(function(){
        $(this).data('oldValue', $(this).val());
    });
    $('.promo-count__number').change(function() {

        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }

    });
});

$(document).ready(function() {
    $('.responsive-table').stacktable();
});

$(document).click(function(e) {
    if (!$(e.target).is('.header__nav')) {
        $('.collapse').collapse('hide');
    }
});

new WOW().init();