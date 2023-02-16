$(document).ready(function(){

    // ---------------네비게이션별 페이지 이동---------------
    if (matchMedia("screen and (max-width: 1440px)").matches) {
        // 1024px 미만에서 사용할 JavaScript
        var nav=$('nav').offset().top;
        var page1=$('header').offset().top-50;
        var page2=$('.con_wrap0').offset().top-50;
        var page3=$('.con_wrap1').offset().top-50;
        var page4=$('.con_wrap2').offset().top-50;
        var page5=$('.con_wrap3').offset().top-50;
        var page6=$('.con_wrap4').offset().top-50;
            
            $('nav ul li').eq(0).click(function(){
                $('html,body').animate({scrollTop:page1},500);
            });
            $('nav ul li').eq(1).click(function(){
                $('html,body').animate({scrollTop:page2},500);
            });
            $('nav ul li').eq(2).click(function(){
                $('html,body').animate({scrollTop:page3},500);
            });
            $('nav ul li').eq(3).click(function(){
                $('html,body').animate({scrollTop:page4},500);
            });
            $('nav ul li').eq(4).click(function(){
                $('html,body').animate({scrollTop:page5},500);
            });
            $('nav ul li').eq(5).click(function(){
                $('html,body').animate({scrollTop:page6},500);
            });

            $('.top_btn').click(function(){
                $('html,body').animate({scrollTop:0},500);
            });
      } else {
        // 1024px 이상에서 사용할 JavaScript
        var nav=$('nav').offset().top;
        var page1=$('header').offset().top;
        var page2=$('.con_wrap0').offset().top-70;
        var page3=$('.con_wrap1').offset().top+60;
        var page4=$('.con_wrap2').offset().top-60;
        var page5=$('.con_wrap3').offset().top+30;
        var page6=$('.con_wrap4').offset().top+30;
            
            $('nav ul li').eq(0).click(function(){
                $('html,body').animate({scrollTop:page1},500);
            });
            $('nav ul li').eq(1).click(function(){
                $('html,body').animate({scrollTop:page2},500);
            });
            $('nav ul li').eq(2).click(function(){
                $('html,body').animate({scrollTop:page3},500);
            });
            $('nav ul li').eq(3).click(function(){
                $('html,body').animate({scrollTop:page4},500);
            });
            $('nav ul li').eq(4).click(function(){
                $('html,body').animate({scrollTop:page5},500);
            });
            $('nav ul li').eq(5).click(function(){
                $('html,body').animate({scrollTop:page6},500);
            });

            $('.top_btn').click(function(){
                $('html,body').animate({scrollTop:0},500);
            });
      }
    
    // ---------------네비게이션별 페이지 이동---------------

    // slide
        $('.center').slick({
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 7,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 3
                    }
                }
            ]
        });
    // slide
  });