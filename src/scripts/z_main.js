
$(document).ready(function() {
    $('select').selectpicker();
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
        // fade: true,
        accessibility: false,
        verticalScrolling: true,
        infinite: false,
        swipeToSlide: true,
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
        accessibility: false,
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: false,
        infinite: false,
        vertical: true,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    vertical: false
                }
            },
            {
                breakpoint: 700,
                settings: {

                }
            }
        ]
    });

    $('.product-nav .slick-slide').hover(function (event) {
        $('.product-for').slick('slickGoTo', $(this).data('slickIndex'));
        $('.product-nav .slick-slide').removeClass('slick-current');
        $(this).addClass('slick-current');
    });

    // $('.slider-nav .slick-slide').on('click', function (event) {
    //     $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
    // });

    $(".product-for").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
    $(".product-nav").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
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

$(document).on('click','.category__catalog__side__collapse .btn',function(){
    $(".category__catalog__side__content").toggleClass('active');

});

new WOW().init();