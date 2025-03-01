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
    // modal
    $('.hero_button ').click(function (e) {
        e.preventDefault()
        $('.modal').fadeIn()
      })
      $('.catalog_form ').click(function (e) {
        e.preventDefault()
        $('.modal_catalog').fadeIn()
      })
    
    $(".exit_icon").click(function(){
        $('.modal').fadeOut()
        $('.modal_catalog').fadeOut()
    })
    // btnlists
    $(".all_btn").on("click", function (e) {
        e.preventDefault()
        $(".hidden").slideToggle(); 
        let text = $(this).text() === "Показать больше" ? "Скрите" : "Показать больше";
        $(this).text(text);
    });
    // price
    let slider = $("#price_slider").ionRangeSlider({
        skin: "flat",
        type: "double",
        min: 0,
        max: 1500000,
        from: 0,
        to: 1200000,
        grid: false,
        hide_min_max: true,
        hide_from_to: true,
        onChange: function (data) {
            $(".min_price").text(data.from.toLocaleString() + " руб.");
            $(".max_price").text(data.to.toLocaleString() + " руб.");
        }
    }).data("ionRangeSlider");

    // Dastlabki qiymatlarni to'g'irlash
    $(".min_price").text(slider.result.from.toLocaleString() + " руб.");
    $(".max_price").text(slider.result.to.toLocaleString() + " руб.");

    let slider2 = $("#price_slider_to").ionRangeSlider({
        skin: "flat",
        type: "double",
        min: 0,
        max: 1500000,
        from:0,
        to: 1200000,
        grid: false,
        hide_min_max: true,
        hide_from_to: true,
        onChange: function (data) {
            $(".min_priceto").text(data.from.toLocaleString() + " руб.");
            $(".max_priceto").text(data.to.toLocaleString() + " руб.");
        }
    }).data("ionRangeSlider");

    // Dastlabki qiymatlarni to'g'irlash
    $(".min_priceto").text(slider2.result.from.toLocaleString() + " руб.");
    $(".max_priceto").text(slider2.result.to.toLocaleString() + " руб.");

})
$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
});