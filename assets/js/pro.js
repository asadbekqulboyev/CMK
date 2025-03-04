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
        arrows: false
    });
    $('.slide_btn.prev').click(function(){
        $('.slider').slick('slickPrev');
    });
    
    $('.slide_btn.next').click(function(){
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
    // $('.hero_button ').click(function (e) {
    //     e.preventDefault()
    //     $('.modal').fadeIn()
    //   })
    if($('.hero_button')){
        
        $('.hero_button').fancybox({
            touch: false, 
            autoFocus: false,  
            closeExisting: true, 
            clickSlide: "close",  
            clickOutside: "close", 
            animationEffect: "fade"
           
        });
    }
    $('.catalog_ral_item').fancybox({
        src: ".modal_quiz",      
        type: "inline",     
        touch: false,   
        autoFocus: false,        
        closeExisting: true,   
        clickSlide: "close",  
        clickOutside: "close",   
        animationEffect: "fade", 
    });
    // btnlists
    $(".all_btn").on("click", function (e) {
        e.preventDefault()
        $(".hidden").slideToggle(); 
        let text = $(this).text() === "Показать больше" ? "Скрите" : "Показать больше";
        $(this).text(text);
    });
    // price
    if($('.price_slider').length ){

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
    }
    if($('#price_slider_to').length ){
    let slider2 = $("#price_slider_to").ionRangeSlider({
        skin: "flat",
        type: "double",
        min: 0,
        max: 200,
        from:0,
        to: 150,
        grid: false,
        hide_min_max: true,
        hide_from_to: true,
        onChange: function (data) {
            $(".min_priceto").html(data.from.toLocaleString() + "м<sup>2</sup>");
            $(".max_priceto").html(data.to.toLocaleString() + "м<sup>2</sup>");
        }
    }).data("ionRangeSlider");
    // Dastlabki qiymatlarni to'g'irlash
    if( $(".min_priceto")){
    $(".min_priceto").html(slider2.result.from.toLocaleString() + "м<sup>2</sup>");
    $(".max_priceto").html(slider2.result.to.toLocaleString() + "м<sup>2</sup>");
}

    }
    // custom selct
    // $(document).ready(function(){
    //     // Sahifa yuklanganda birinchi option elementining background rangini .bg ga o'rnatish
    //     var firstOptionBg = $(".options .icon_option").css("background-color");
    //     $(".bg").css("background-color", firstOptionBg);
    
    //     $(".select-box").click(function(){
    //         $(this).next(".options").slideToggle();
    //     });
    
    //     $(".option").click(function(){
    //         $(this).parent('.options').prev('.select-box').children('.selected').val($(this).text());
    //         console.log($(this).parents('.select-box').children('.selected'));
    //         $(".options").hide();
    //     });
    
    //     $(document).click(function(e) {
    //         if (!$(e.target).closest(".quiz_lists_select").length) {
    //             $(".options").hide();
    //         }
    //     });
    // });
    $(document).ready(function(){
    $(".select-box").click(function(){
        $(this).next(".options").slideToggle();
    });

    $(".option").click(function(){
        // Tanlangan option ichidagi text va icon_option elementining background rangini olish
        var selectedText = $(this).find("span:nth-child(2)").text();
        var selectedColor = $(this).find(".icon_option").css("background-color");
        
        // .selected inputga tanlangan option textini berish
        $(this).parent('.options').prev('.select-box').children('.selected').val(selectedText);
        
        // Tanlangan optiondagi icon_option background rangini .bg ga berish
        $(this).parent('.options').prev('.select-box').children('.bg').css("background", selectedColor);
        
        $(".options").hide();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest(".quiz_select").length) {
            $(".options").hide();
        }
    });
})
    let currentIndex = 0;
    let items = $(".quiz_content .quiz_item");
    items.fadeOut();
    items.first().fadeIn();
    let prevBtn = $(".quiz_content .prev");
    let nextBtn = $(".quiz_content .next");
    let progressBar = $(".quiz_content .progress-bar");
    let totalItems = items.length;
    // progress update 
    function updateProgress() {
        let progress = ((currentIndex + 1) / totalItems) * 100;
        progressBar.css("width", progress + "%");
        if (currentIndex === totalItems - 1) {
            nextBtn.attr("type", "submit");
            nextBtn.children('span').text('Отправить')
            $(".btn_save").fadeIn().css({display:'flex'})
        } else {
            nextBtn.attr("type", "button");
            $(".btn_save").fadeOut()
            nextBtn.children('span').text('Далее')
        }
    }
    
    function showItem(index) {
        items.stop(true, true).fadeOut(300);
        setTimeout(() => {
            items.eq(index).stop(true, true).fadeIn(300);
            prevBtn.show().css({display:'flex'});
            if (index > 0) {
                items.eq(index).find(".quiz_content .prev").hide();
            }
            updateProgress();
        }, 300);
    }
    
    items.eq(currentIndex).fadeIn(300);
    updateProgress();
    
    nextBtn.click(function() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            showItem(currentIndex);
    $('.progress-text span').text(currentIndex+1)
        }
    });
    
    prevBtn.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            showItem(currentIndex);
    $('.progress-text span').text(currentIndex+1)
        }
    });
    // cataloq quiz
    // $('.catalog_ral_item').click(function(e){
    //     e.preventDefault()
    //     $('.modal_quiz').fadeIn()
    // })
    
})
$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
});
if(innerWidth<768){
    $('.header .menu_text').text('Меню')
}else{
    $('.header .menu_text').text('Каталог')
}