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
    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $('#current_slide').text(currentSlide + 1);
    });
    // promotions
    $('.promotions_slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000
    });
    $('.promotions_button .prev').click(function(){
        $('.promotions_slider').slick('slickPrev');
    });
    
    $('.promotions_button .next').click(function(){
        $('.promotions_slider').slick('slickNext');
    });
    // about
    $('.slide_about').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1120, // Ekran 1120px dan kichik bo‘lsa
              settings: {
                slidesToShow: 1 // 1 ta slayd ko‘rsatish
              }
            }
          ]
    });

    $('.btn_slideto.prev').click(function(){
        $('.slide_about').slick('slickPrev');
    });
    
    $('.btn_slideto.next').click(function(){
        $('.slide_about').slick('slickNext');
    });
    // faq
    $(".faq_header").on("click", function () {
        let item = $(this).parent(); 
        let body = $(this).next(".faq_description");
        // $(".faq_description").slideUp()
        // $(".faq_description:first").slideDown()
        if (item.hasClass("active")) {
            item.removeClass("active");
        } else {
            $(".faq_item").removeClass("active"); 
            item.addClass("active");
        }
    });
    // forms
    $("input[type=tel]").inputmask("+7 (999)-999-99-99");
})
$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
});