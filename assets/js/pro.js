$(document).ready(function(){
    // header
    
    $('.catalog').click(function () { 
        $(this).toggleClass('active');
        $(this).next('.subcatalog').slideToggle();
    });
    // hero
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000
    });
    $('.prev').click(function(){
        $('.slider').slick('slickPrev');
    });
    
    $('.next').click(function(){
        $('.slider').slick('slickNext');
    });
})
$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
});