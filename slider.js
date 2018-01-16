
$(document).ready(function () {
    $('#driver-slideshow').slick({

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        touchMove:false,
        prevArrow: '<button type="button" id="my-prev" class="my-prev hidebutton"><span class=" uk-icon" uk-icon="icon: arrow-left;ratio:1.8"></span></button>',
        nextArrow: '<button type="button" class="my-next"><span class=" uk-icon" uk-icon="icon: arrow-right;ratio:1.8"></span></button>'

    });
    $('.my-next').click(function() {
        $("#driver-slideshow").addClass("driver-slideshow-2").removeClass("driver-slideshow-1");
        $(".slideshow-padding-1").addClass("slideshow-padding-2").removeClass("slideshow-padding-1");
        $("#my-prev").addClass("blockbutton").removeClass("hidebutton");
        $('.my-next').hide();
        $('.slick-dots').css("left" ,"400px")

    })
    $('#slick-slide-control01').click(function() {
        $("#driver-slideshow").addClass("driver-slideshow-2").removeClass("driver-slideshow-1");
        $(".slideshow-padding-1").addClass("slideshow-padding-2").removeClass("slideshow-padding-1");
        $("#my-prev").addClass("blockbutton").removeClass("hidebutton");
        $('.my-next').hide();
        $('.slick-dots').css("left" ,"400px");
    })
    $('#slick-slide-control00').click(function() {
        $("#driver-slideshow").addClass("driver-slideshow-1").removeClass("driver-slideshow-2");
        $(".slideshow-padding-2").addClass("slideshow-padding-1").removeClass("slideshow-padding-2");
        $('.my-next').show();
        $("#my-prev").removeClass("blockbutton").addClass("hidebutton");
        $('.slick-dots').css("right" ,"-156px");
        $('.slick-dots').css("left" ,"0px");

    })
    $('.my-prev').click(function() {

        $("#driver-slideshow").addClass("driver-slideshow-1").removeClass("driver-slideshow-2");
        $(".slideshow-padding-2").addClass("slideshow-padding-1").removeClass("slideshow-padding-2");
        $('.my-next').show();
        $("#my-prev").removeClass("blockbutton").addClass("hidebutton");
        $('.slick-dots').css("right" ,"-156px");
        $('.slick-dots').css("left" ,"0px");
    })



});