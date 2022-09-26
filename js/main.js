/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */

$(document).ready(function () {
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 60,
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

    $('#header .sound .music_on').on('click',function () {
        $(this).fadeOut();
        $('#header .sound .music_off').fadeIn();
        var g = document.getElementById("sound");
        g.play();
    });

    $('#intro').on('click',function () {

        $('#intro').fadeOut();
        var g = document.getElementById("sound");
        g.play();

        $('#section01 .main_illust').addClass('on');
        $('#section01 .main_title01').addClass('on');
        $('#section01 .main_title02').addClass('on');
        $('#section01 .main_date').addClass('on');
        $('#section01 .main_scroll').addClass('on');
    });

    $('#header .sound').on('click',function () {
        var g = document.getElementById("sound");
        g.pause();
    });

    // if ($(this).hasClass("off")) {
    //     g.muted = true
    // } else {
    //     g.muted = false
    // }

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





    // trailer section
    $('#trailer .btn_play').on('click',function () {
        $('#trailer .btn_play').fadeOut();
        $('#trailer .btn_stop').fadeIn();
        $('#video01').trigger('play');
    });

    $('#trailer .btn_stop').on('click',function () {
        $('#trailer .btn_stop').fadeOut();
        $('#trailer .btn_play').fadeIn();
        $('#video01').trigger('pause');
    });

    $('#myContainer').multiscroll({
        // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C','#7E8F7C'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        css3: true,

        verticalCentered : true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        navigation: false,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: [],
        loopBottom: false,
        loopTop: false,
        paddingTop: 0,
        paddingBottom: 0,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        keyboardScrolling: true,
        touchSensitivity: 5,

        //responsive
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveExpand: false,

        // Custom selectors
        sectionSelector: '.ms-section',
        leftSelector: '.ms-left',
        rightSelector: '.ms-right',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},

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

    $('#menu_pop .menu_text > div').on('click',function () {
        $('#menu_pop').fadeToggle();
        $('#header .menu').toggleClass('active');
        $('#menu_pop .menu_chain1').toggleClass('on');
        $('#menu_pop .menu_chain2').toggleClass('on');
        $('#menu_pop .menu_chain3').toggleClass('on');
    });

    $('#menu_pop .menu_text .menu_home').on('click',function () {
        $('#trailer').fadeOut();
        $('.container').stop().animate({'scrollLeft': 0}, 1200, 'easeInOutExpo');
    });

    $('#menu_pop .menu_text .menu_story').on('click',function () {
        $('#trailer').fadeOut();
        $('#character_pop').fadeOut();
        $('.container').stop().animate({'scrollLeft': 1937}, 1200, 'easeInOutExpo');
    });

    $('#menu_pop .menu_text .menu_character').on('click',function () {
        $('#trailer').fadeOut();
        $('#character_pop').fadeIn();
        $('#section02').stop().animate({'scrollLeft': 1937}, 1200, 'easeInOutExpo');
    });

    $('#menu_pop .menu_text .menu_trailer').on('click',function () {
        $('#trailer').fadeIn();
    });

    $('#menu_pop .menu_text .menu_gallery').on('click',function () {
        $('#trailer').fadeOut();
    });

    $('#section01 .main_scroll').on('click',function () {
        $('#trailer').fadeOut();
        $('.container').stop().animate({'scrollLeft': 1937}, 1200, 'easeInOutExpo');
    });



    // 스크롤 이벤트
    $('.container').scroll(function () {
        var scrollLeft = $('.container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값



        // =========================
        // scroll event section
        //==========================

        $('#header ul .logo').css('transform',`Rotate(${(scrollLeft) * 0.1}deg)`);



        if (scrollLeft >= 726) {
            $('#section02 .sub_text01').addClass('on');
        }

        if (scrollLeft >= 2600) {
            $('#section02 .sub_text02').addClass('on');
        }

        if (scrollLeft >= 2300) {
            $('#section02 .sub_circle').fadeIn();
        } else {
            $('#section02 .sub_circle').fadeOut();
        }

        if (scrollLeft >= 3500) {
            $('#section03 .sub_illust01').addClass('on');
            $('#section03 .sub_illust02').addClass('on');
            $('#section03 .sub_illust03').addClass('on');
        }

        if (scrollLeft >= 4500) {
            $('#section03 .sub_down').fadeIn();
        } else {
            $('#section03 .sub_down').fadeOut();
        }

        if (scrollLeft >= 5300) {
            $('#section03 .sub_pen').fadeIn();
        } else {
            $('#section03 .sub_pen').fadeOut();
        }

        if (scrollLeft >= 6500) {
            $('#section04 .sub_skull2').fadeIn();
        } else {
            $('#section04 .sub_skull2').fadeOut();
        }

        if (scrollLeft >= 7000) {
            $('#section04 .sub_text08 .text_n').addClass('on');
            $('#section04 .sub_text08 .text_o').addClass('on');
            $('#section04 .sub_text08 .text_t').addClass('on');
            $('#section04 .sub_text08 .text_g').addClass('on');
            $('#section04 .sub_text08 .text_o2').addClass('on');
            $('#section04 .sub_text08 .text_i').addClass('on');
            $('#section04 .sub_text08 .text_n2').addClass('on');
            $('#section04 .sub_text08 .text_g2').addClass('on');
            $('#section04 .sub_text08 .text_b').addClass('on');
            $('#section04 .sub_text08 .text_a').addClass('on');
            $('#section04 .sub_text08 .text_c').addClass('on');
            $('#section04 .sub_text08 .text_k').addClass('on');
            $('#section04 .sub_yellow03').addClass('on');
            $('#section04 .sub_yellow04').addClass('on');
        } else {

        }

        if (scrollLeft >= 8600) {
            $('#section05 .sub_text15 .text_w').addClass('on');
            $('#section05 .sub_text15 .text_i').addClass('on');
            $('#section05 .sub_text15 .text_t').addClass('on');
            $('#section05 .sub_text15 .text_n').addClass('on');
            $('#section05 .sub_text15 .text_e').addClass('on');
            $('#section05 .sub_text15 .text_s').addClass('on');
            $('#section05 .sub_text15 .text_s2').addClass('on');
            $('#section05 .sub_blackLine').addClass('on');
        } else {

        }

        if (scrollLeft >= 10100) {
            $('#section06 .sub_text16').addClass('on');
        }

        if (scrollLeft >= 10100) {
            $('#section06 .sub_text17').addClass('on');
        }

        if (scrollLeft >= 10100) {
            $('#section06 .sub_text18').addClass('on');
        }

        if (scrollLeft >= 10100) {
            $('#section06 .sub_text19').addClass('on');
            $('#section06 .sub_yellow05').addClass('on');
        }

        if (scrollLeft >= 13500) {
            $('#section07 .sub_text21_1').addClass('on');
            $('#section07 .sub_text21_2').addClass('on');
        }

        if (scrollLeft >= 16580) {
            $('#section08').addClass('on');
            $('#section08 .text_wrap').addClass('on');

        }


        // $('#section01 .main_illust').stop().animate({'margin-left': scrollLeft * 0.2}, 100);
        $('#section05').stop().animate({'margin-left': (700) -scrollLeft * 0.1}, 100)
        // $('#section06 .sub_joe').stop().animate({'margin-left': (500) -scrollLeft * 0.1}, 500);








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