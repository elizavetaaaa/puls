$(document).ready(function(){

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        dots:false,
        autoHeight: true
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


//tabs
    $('ul.catalog__caption').on('click', 'li:not(.catalog__item_active)', function() {
        $(this)
            .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    //adding fnc to more btn in catalog
    $('.catalog__front-more-btn').each(function (item) {
        $(this).on('click', function(event){
            event.preventDefault();
            $('.catalog__front').eq(item).addClass('catalog__front_active')
            $('.catalog__back').eq(item).addClass('catalog__back_active')
        });
    });

    //adding fnc to back btn in catalog

    $('.catalog__backOff').each(function (item) {
        $(this).on('click', function(event){
            event.preventDefault();
            $('.catalog__front').eq(item).removeClass('catalog__front_active')
            $('.catalog__back').eq(item).removeClass('catalog__back_active')
        });
    });

    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            autoStart : true
        },
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop:true
    });


});

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.843755, 74.623103],
        zoom: 10
    });
    var myIcon = DG.icon({
        iconUrl: 'https://image.flaticon.com/icons/png/128/1673/1673188.png',
        iconRetinaUrl: 'my-icon@2x.png',
        iconSize: [38, 38],
    });

    var marker = DG.marker([42.843755, 74.623103], {icon: myIcon}).addTo(map).bindPopup('Вы кликнули по мне!');
    marker.bindLabel('Я здесь!!! Кликни по  мне!', { static: true });

    $('.tel').inputmask('+\\9\\96(999)-99-99-99');

    $(window).on('scroll', function () {
        if($(this).scrollTop() < 500){
            $('.go-top').fadeOut('slow')
        }
        else{
            $('.go-top').fadeIn('slow')
        }
    });



    $('.header__button , .home__button').on('click',function () {
        $('.overlay, .popup__consultation').fadeIn('slow')

    });

    $('.popup__close').on('click',function () {
        $('.overlay , .popup__consultation, .popup__order , .popup__thanks, .popup__buy-info').fadeOut('slow')

    });

    $('.consult__form-button').on('click',function (event) {
        event.preventDefault();
        $('.overlay, .popup__thanks').fadeIn('slow')

    });



    $('.catalog__btn').each(function (item) {
        $(this).on('click', function () {
            $('.overlay, .popup__order').fadeIn('slow')
            $('.popup__order-subtitle').text($('h3.catalog__front-title').eq(item).text())


        })
    });
    $('.form__button-buy').each(function (item) {
        $(this).on('click', function(event){
            event.preventDefault();
            $('.overlay , .popup__consultation, .popup__order , .popup__thanks').fadeOut()
            $('.overlay, .popup__buy-info').fadeIn('')
        });
    });


    $('.form__button-order').each(function (item) {
        $(this).on('click', function(event){
            event.preventDefault();
            $('.overlay , .popup__consultation, .popup__order , .popup__thanks').fadeOut()
            $('.overlay, .popup__thanks').fadeIn('')
        });
    });

    $('.overlay').on('click',function (e) {
        if (e.target.className==='overlay')
        $('.overlay , .popup__consultation, .popup__order , .popup__thanks, .popup__buy-info').fadeOut('slow')

    });

});
