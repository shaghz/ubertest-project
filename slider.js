 $(document).ready(function(){

    var x ,
    $prev = $('#my-prev'),
    $next =$('#my-next'),
    $slideshow = $('#driver-slideshow');

    function getPercentage(){
        var totalWidth = 0;
        $('.s-card').each(function() {
            totalWidth += $(this).width() ;
        });
        x = -totalWidth / 50 + '%';
        console.log(x);
    };
    function showNext(){
        $next.show();
        $prev.hide();
        $('.toggle').toggleClass('slider-button active-slider-button');

    };
    function showPrev(){
        $next.hide();
        $prev.show();
        $('.toggle').toggleClass('slider-button active-slider-button');
    };

    getPercentage(x);
    $prev.hide();

    $('#my-next,#slider-right-button').on('click',function(){
        showPrev();
        $slideshow.css("transform","translate("+ x +" ,0)");
    });

    $('#my-prev ,#slider-left-button').on('click',function(){
        showNext();
        $slideshow.css("transform","translate(0%,0)");
    })   ;
});

