startSlide();
fillLoader();


function startSlide() {
    var index = 0;
    var totalSlide = $('.slide-wrap > div').length;

    var i = 0;
    var timer = setInterval(function() { //실행할 스크립트
        fillLoader();
        if  (index == (totalSlide  -1)  ) {
            $('.slide-wrap').css('left',0);
            index= -1;
        }
        $(".slide-wrap").animate({
            left:'-'+100*(index+1)+'%'
        }, 1000 );
        index = index + 1;
    },5000);
}

function fillLoader() {
    setTimeout(function() {
        $('#loadWrap').css('visibility','visible');
        $(".fill").animate({
            width:'100%',
        }, 4000 , function(){
            $('.fill').css('width', '0%');
            $('#loadWrap').css('visibility','hidden');
        });
    }, 1000);
}

function rollingText() {
}
