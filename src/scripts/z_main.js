
$(document).ready(function() {
    $('select').selectpicker();
});

$(document).ready(function() {
    $('.slider-review').slick({});
});

$(document).ready(function() {
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

$(document).ready(function () {
    // var $range = $("#range_48"),
    //     $result = $("#result_48");

    // var track = function () {
    //     var $this = $(this),
    //         value = $this.prop("value").split(";");
    //
    //     $result.html(value[0] + " - " + value[1]);
    // };

    $("#range_48").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        to: 80,
        postfix: " руб",
    });

    // $range.on("change", track);
});

$(document).ready(function() {
    $('.product-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
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
        // centerMode: true,
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

    $(".product-nav").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });

    $('.product-nav').mouseover(function(e){
        $('.product-for').slick("slickNext");
    });
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
        if (e.originalEvent.deltaY < 0) {
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
