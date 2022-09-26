/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */

$(document).ready(function () {
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 190,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================
    // $('#intro').delay(3000).fadeOut(500);

    $('#header .menu').on('click',function () {
        $(this).toggleClass('active');
        $('#menu_pop').fadeToggle();

        $('#menu_pop .menu_chain1').toggleClass('on');
        $('#menu_pop .menu_chain2').toggleClass('on');
        $('#menu_pop .menu_chain3').toggleClass('on');
    });

    $('.menu_text > div').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
    });
    $('.menu_text > div').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
    });




//==============================================================
});


$(function () {

    // 메뉴부분
    $('.naviJs > li > a, .topBtn').click(function () {
        var posX = $($(this).attr('href')).position().left;
        $('.container').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo');
        return false;
    });

    // 스크롤 이벤트
    $('.container').scroll(function () {
        var scrollLeft = $('.container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값



        // =========================
        // scroll event section
        //==========================

        $('#header ul .logo').css('transform',`Rotate(${(scrollLeft) * 0.1}deg)`);

        if (scrollLeft >= 0) {
            $('#section01 .crayon > li:nth-child(1)').addClass('on');
            $('#section01 .crayon > li:nth-child(3)').addClass('on');
        }

        if (scrollLeft >= 400) {
            $('#section01 .crayon > li:nth-child(5)').addClass('on');
        }
        if (scrollLeft >= 480) {
            $('#section01 .crayon > li:nth-child(6)').addClass('on');
        }
        if (scrollLeft >= 1100) {
            $('#section01 .crayon > li:nth-child(7)').addClass('on');
        }
        if (scrollLeft >= 2000) {
            $('#section01 .crayon > li:nth-child(8)').addClass('on');
            $('#section01 .crayon > li:nth-child(9)').addClass('on');
        }
        if (scrollLeft >= 2100) {
            $('#section01 .crayon > li:nth-child(11)').addClass('on');
            $('#section01 .crayon > li:nth-child(12)').addClass('on');
        }





        //===================================================================
        // 메뉴 활성화
        $('.container .main > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstX = $('.container .main > div:first').position().left;
            var posX = $(this).position().left;
            if (scrollLeft <= firstX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollLeft >= posX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        });
    });


});