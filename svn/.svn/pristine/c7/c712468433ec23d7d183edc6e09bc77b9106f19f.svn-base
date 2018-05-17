jQuery.noConflict()(function ($) {

    'use strict';
	
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iPhone: function() {
            return navigator.userAgent.match(/iPhone/i);
        },
        iPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        iPod: function() {
            return navigator.userAgent.match(/iPod/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    function progress_bar(){

        $('.progress-bar').each(function(){ 

            $(this).appear(function(){          
                var percent = parseInt($(this).find('span').text(),10);
                var $endNum = percent;
                        $(this).find('.progress-inner').velocity({
                    width: percent + '%'
                },{ 
                    duration: 1200 
                }, 'ease-in-out');

                if (typeof $.fn.countTo !== 'undefined') {

                    $(this).find('span').countTo({
                        from: 0,
                        to: $endNum,
                        speed: 1200,
                        refreshInterval: 30
                    }); 

                }
                
            });
        }); 

    }
    function counterItem(){
        $('.counter-item').each(function(){ 
            $(this).appear(function(){          
                var percent = parseInt($(this).find('i').text(),10);
                var $endNum = percent;

                $(this).find('i').countTo({
                    from: 0,
                    to: $endNum,
                    speed: 1200,
                    refreshInterval: 30
                });  
                
            });
        }); 

    }
    function scrollTop(){
        var offset = 300,
        scroll_top_duration = 350,
        $back_to_top = $('.scroll-top');
        $(window).on('scroll', function(){
            if($(this).scrollTop() > offset ) {
                $back_to_top.addClass('scroll-top-visible').removeClass('scroll-top-hidden');
            } 
			else {
                $back_to_top.addClass('scroll-top-hidden').removeClass('scroll-top-visible');
            }
        });
        $back_to_top.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, scroll_top_duration);
            return false;
        });

    }
    function sweetMenu(){
        var $menu = $('#fullscreen-navigation'),
            $header = $('header'),
            $body = $('body'),
            $fn = $('#fullscreen-navigation'),
            $fnToggle = $('.fullscreen-menu-toggle'),
            $window = $(window);
            if($body.hasClass('header-fixed')){
                $body.stickyPanel({
                    slickyClass: "fixedheader",
                    extraOffset: 0,
                    fakeBlock: false,
                    scrollClasses: true
                });   
            }

        $menu.find('.menu-item-has-children > a').on('click', function(e) {
            e.preventDefault();
            if ($(this).next('ul').is(':visible')) {
                $(this).removeClass('sub-active').next('ul').slideUp(250);
            } else {
                $('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
                $(this).addClass('sub-active').next('ul').slideToggle(250);
            }
        });

        var fnOpen = false;
        var fnToggleFunc = function() {
            fnOpen = !fnOpen;
            $body.toggleClass('fullscreen-nav-open');
            $fn.stop().fadeToggle(500);
            $('.fullscreen-menu-toggle > .menu-bars').toggleClass('active');
            return false;
        };
        $fnToggle.on('click', fnToggleFunc);
        $(document).on('keyup', function(e) {
            if (e.keyCode == 27 && fnOpen) {
                fnToggleFunc();
            }
        });
		
        $fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
            fnToggleFunc();
            return true;
        });

        $menu.on('click', function(){
            fnToggleFunc();
            return true;
        });

        $('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
            e.stopPropagation();
        });

    }

$(document).ready(function() {
    progress_bar();
    counterItem();
    scrollTop();
    sweetMenu();
    $('[data-toggle=tooltip]').tooltipster({
        theme: 'mini-tooltip',
        touchDevices: false,
        trigger: 'hover'
    });

    $('.jarallax').jarallax({
        speed: 0.2,
        noAndroid: true
    });


    $('.blog-post.masonry').imagesLoaded(function(){
        $('.blog-post.masonry').isotope({
            layoutMode: 'masonry',
            transitionDuration: '0.3s'
        });
    });


    if($('.animsition').length) {
        $('.animsition').animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1200,
            outDuration: 1200,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'body',
            loadingClass: 'animsition-loading',
            loadingInner: '<div class="preloader"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [
                'animation-duration', 
                '-webkit-animation-duration', 
                '-o-animation-duration'],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) {
                window.location.href = url;
            }
        });

        $('.animsition').on('animsition.outStart', function(){
            $('body').removeClass('fullscreen-nav-open');
        });

    }

    $('.fancybox').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        closeBtn: false,
        padding: 0,
        beforeShow : function() {
            var alt = this.element.find('img').attr('alt');
            this.inner.find('img').attr('alt', alt);
            this.title = alt;
        }
    });

    var swiper = new Swiper('.testimonial-carousel', {
        pagination: '.testimonial-pagination',
        paginationClickable: true
    });
    
    function showReturnMessage(form_el) {
        form_el.find('.return-msg').addClass('show-return-msg');
    }
    $('.return-msg').on('click', function(e) {
        $(this).removeClass('show-return-msg').html('');
    });

});

});