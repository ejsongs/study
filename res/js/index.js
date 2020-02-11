function startSlide() {
    var index = 0;
    var totalSlide = $('.slide-wrap > div').length;

    var timer = setInterval(function() { //실행할 스크립트
        if  (index == (totalSlide  -1)  ) {
            $('.slide-wrap').css('left',0);
            index= -1;
            // console.log('find');
        }
        $('.loader-wrap').css('visibility','visible'); 
        $(".slide-wrap").animate({
            left:'-'+100*(index+1)+'%'
        }, 1000 );
        index = index + 1;

    },2000);
}

startSlide();
