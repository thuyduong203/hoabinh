/*============================================ Custom Functions  ============================================*/
;(function ($, window, document, undefined) {
    'use strict';
    var _doc = $(document),
    _win = $(window),

    Egprojets = {
        name : 'Egprojets',
        version : '1.0.0',
        // On Page Ready
        documentReady:function(){
            Egprojets.eventButtonTop();
            Egprojets.initSlide();
            // Egprojets.menuButton();
            Egprojets.initPopup();
            // Egprojets.scrollMenu();
            Egprojets.scrollMenuMobile();
            Egprojets.selectCustom();
            Egprojets.slidePlanner();
            Egprojets.controlForm();
        },

        // On Page Load
        windowLoad: function(){
            Egprojets.preloadWow();
            Egprojets.menuButton();
            Egprojets.scrollFromMenu();
        },

        // Scroll Menu From Hash
        scrollFromMenu: function(){
            var hash = location.hash.substr(1);
            if( hash > 0 ) {
                var target = $('[data-section-scroll='+hash+']');
                var targetHeightHash = target.offset().top;
                $('html, body').animate({
                  scrollTop: targetHeightHash + 200
                }, 1000)
            }
        },

        // Preload Wow
        preloadWow: function(){
            jQuery("#status").fadeOut();
            jQuery("#preloader").delay(350).fadeOut("slow");
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        },

        // Back to Top js
        eventButtonTop: function(){
            var $this = $(window);
            $(window).scroll(function(){
                if ($(this).scrollTop() > 400) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
            //Click event to scroll to top
            $(document).on('click','.scrollToTop',function(){
                $('html, body').animate({scrollTop : 0},400);
                return false;
            });
        },

        // Menu button
        menuButton: function(){
        	 var openBtn = $("#menu_click");
            	openBtn.on('click',function(){
                $(this).toggleClass("change");
                $('.wd_main_menu_wrapper').slideToggle();
            });
            
            // Menu js for Position fixed
            $(window).scroll(function(){
                var window_top = $(window).scrollTop() + 1; 
                if (window_top > 500) {
                    $('.wd_main_menu_wrapper').addClass('menu_fixed animated fadeInDown');
                } else {
                    $('.wd_main_menu_wrapper').removeClass('menu_fixed animated fadeInDown');
                }
            });
        },
        

        // Init Slide Website
        initSlide: function(){
            // Testimonial Slider Js
            $('.wd_testimonial_slider .owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
            
            // Family Slider Js
            $('.wd_family_slider .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText:["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
        },

        // Magnific Popup js
        initPopup: function(){
            $('.popup-gallery').magnificPopup({
                delegate: '.wd_glr_overlay a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small></small>';
                    }
                }
            });
        },

        //Single page scroll js
        // scrollMenu: function(){
        //     $('.wd_single_index_menu ul li a').on('click' , function(e){
        //       $('.wd_single_index_menu ul li').removeClass('active');
        //       $(this).parent().addClass('active');
        //       var target = $('[data-section-scroll='+$(this).attr('href')+']');
        //       e.preventDefault();
        //       var targetHeight = target.offset().top-parseInt('80', 10);
        //       $('html, body').animate({
        //         scrollTop: targetHeight
        //       }, 1000);
        //     });
            
        //     //Single page scroll Active Link
        //     $(window).scroll(function() {
        //       var windscroll = $(window).scrollTop();
        //       var target = $('.wd_single_index_menu ul li');
        //       if (windscroll >= 0) {
        //       $('[data-section-scroll]').each(function(i) {
        //         if ($(this).position().top <= windscroll + 83) {
        //          target.removeClass('active');
        //           if ( target.eq(i).hasClass('scroller') ) {
        //                 target.eq(i).addClass('active');
        //           }
        //         }
        //       });
        //       }else{
        //       target.removeClass('active');
        //       $('.wd_single_index_menu ul li:first').addClass('active');
        //       }
        //     });
        // },

        //Single page scroll js Mobile
        scrollMenuMobile: function(){
            $('.wd_main_menu ul li a').on('click' , function(e){
              //$('.wd_single_index_menu_down ul li').removeClass('active');
              //$(this).parent().addClass('active');
              //var target = $('[data-section-scroll='+$(this).attr('href')+']');
              //e.preventDefault();
              //var targetHeight = target.offset().top-parseInt('83', 10);
              //$('html, body').animate({
              // scrollTop: targetHeight
              //}, 5000);
              $('.wd_main_menu_wrapper').slideToggle();
              $('.wd_menu_btn').toggleClass('change');
            });
            
            //Single page scroll Active Link Mobile
            $(window).scroll(function() {
              var windscroll = $(window).scrollTop();
              var target = $('.wd_single_index_menu_down ul li');
              if (windscroll >= 0) {
               $('[data-section-scroll]').each(function(i) {
                if ($(this).position().top <= windscroll + 83) {
                 target.removeClass('active');
                 target.eq(i).addClass('active');
                }
               });
              }else{
               target.removeClass('active');
               $('.wd_single_index_menu_down ul li:first').addClass('active');
              }
            });
        },

        // CountDown Js
      
		

        // Custom Select Box Js
        selectCustom: function(){
            $(".custom-select").each(function() {
                  var classes = $(this).attr("class"),
                      id      = $(this).attr("id"),
                      name    = $(this).attr("name");
                  var template =  '<div class="' + classes + '">';
                      template += '<span class="custom-select-trigger">' + $(this).attr("data-placeholder") + '</span>';
                      template += '<div class="custom-options">';
                      $(this).find("option").each(function() {
                        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
                      });
                  template += '</div></div>';
                  
                  $(this).wrap('<div class="custom-select-wrapper"></div>');
                  $(this).hide();
                  $(this).after(template);
            });
            $(".custom-option:first-of-type").hover(function() {
              $(this).parents(".custom-options").addClass("option-hover");
            }, function() {
              $(this).parents(".custom-options").removeClass("option-hover");
            });
            $(".custom-select-trigger").on("click", function(event) {
              $(this).parents(".custom-select").toggleClass("opened");
              event.stopPropagation();
            });
            $(document).on('click','html',function(){
              $(".custom-select").removeClass("opened");
            });

            $(document).on('click','.custom-option',function(){
              $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
              $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
              $(this).addClass("selection");
              $(this).parents(".custom-select").removeClass("opened");
              $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
            });
        },

        controlForm: function(){
          $(document).on('submit','.form-reservation',function(){
            $('.mail-message').remove();
            $('.inputError').removeClass('inputError');
            var hasError = false;
            $('.required-field').each(function() {
              if($.trim($(this).val()) == '') {
                var labelText = $(this).attr('name');
                $(this).addClass('inputError');
                hasError = true;
              } else if($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test($.trim($(this).val()))) {
                  var labelText = $(this).attr('name');
                  $(this).addClass('inputError');
                  hasError = true;
                }
              }
            });
            if(!hasError) {
              var formInput = $(this).serialize();
              $('.form-reservation').append('<div id="preloader" class="temp-loader"><div id="status"><img src="assets/images/header/preloader.gif" id="preloader_image" alt="loader"></div></div>')
              $.post($(this).attr('action'),formInput, function(data){
                $('.temp-loader').fadeOut("slow", function() {
                  $('.temp-loader').remove(); 
                  $('.form-reservation').before('<div class="mail-message"><p class="mail-head">Thank You!</p><p>Your email has been delivered.</p></div>');
                });
              });
            }
            return false;   
          });

        //   $(document).on('click','.wd_btn > a', function(){
        //     $('.form-reservation').submit();
        //     return false
        //   });

        },
        // Main Slider JS Planner
        slidePlanner: function(){
            $('.wd_main_slide').each(function(){
               $(this).css('background-image',"url('"+$(this).attr('data-slide')+"'");
            });
            var owl = $('.wd_planner_slider .owl-carousel');
            owl.owlCarousel({
                loop:true,
                margin:0,
                autoplay:true,
                navText : false,
                items:1
                
            });


            function setAnimation ( _elem, _InOut ) {
              var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

              _elem.each ( function () {
                var $elem = $(this);
                var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

                $elem.addClass($animationType).one(animationEndEvent, function () {
                  $elem.removeClass($animationType);
                });
              });
            }

            owl.on('change.owl.carousel', function(event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-out]");
                setAnimation ($elemsToanim, 'out');
            });

            owl.on('changed.owl.carousel', function(event) {

                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");
                setAnimation ($elemsToanim, 'in');
            })
        }
    }
    

    if ($("#donate-modal").length && $(".buttonDonate").length  && $(".donate-modal-close").length) {
		$(document).on('click','.buttonDonate',function(){
			$("#donate-modal").show();
		});
		$(document).on('click','.donate-modal-close',function(){
			$("#donate-modal").hide();
		});
		$(document).on('click','body',function(e){
			if(e.target.id == $("#donate-modal").attr('id')) { $("#donate-modal").hide(); }
		});
	}
	
	$(document).on('click', '#donate-modal .crypto-item', function(){
		let parent = $(this).parents('.donate-card');
		parent.find('.cryptos-box-view').show();
		parent.find('.cryptos-box-view .coin-img').html('<img src="'+$(this).data('img')+'" />');
		parent.find('.cryptos-box-view .coin-id').html($(this).data('id'));
		parent.find('.cryptos-box-view .coin-address').html($(this).data('address'));
		parent.find('.cryptos-box-view .coin-qr-code').html('').qrcode({width: 160,height: 160,text: $(this).data('address')});
	});
	
	$(document).on('click', '#donate-modal .cryptos-box-view-close', function(){
		let parent = $(this).parents('.donate-card');
		parent.find('.cryptos-box-view').hide();
	});


    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
    if ($("#clock").length) {
        function timeElapse(date){
            var current = Date();
            var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
            var days = Math.floor(seconds / (3600 * 24));
            if (days < 10) {
                days = "0" + days;
            }
            seconds = seconds % (3600 * 24);
            var hours = Math.floor(seconds / 3600);
            if (hours < 10) {
                hours = "0" + hours;
            }
            seconds = seconds % 3600;
            var minutes = Math.floor(seconds / 60);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            seconds = seconds % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var html = '<div class="box"><div>' + days + '</div> <span>'+ $('#clock').data('text-day') +'</span> </div><div class="box"><div>' + hours + '</div> <span>'+ $('#clock').data('text-hour') +'</span> </div><div class="box"><div>' + minutes + '</div> <span>'+ $('#clock').data('text-minute') +'</span> </div><div class="box"><div>' + seconds + '</div> <span>'+ $('#clock').data('text-second') +'</span> </div>';
            $('#clock').html(html);
        }
		var time = $('#clock').data('date');
        $('#clock').countdown(time.replace(/-/g,'/'), function(event) {
            if(event.type == 'stoped'){
                var together = new Date($('#clock').data('date'));           
                together.setHours(0);                           
                together.setMinutes(0);             
                together.setSeconds(0);                 
                together.setMilliseconds(0);
                setInterval(function() {
                    timeElapse(together);
                }, 1000);
            }else{
                var $this = $(this).html(event.strftime(''
                + '<div class="box"><div>%D</div> <span>'+ $('#clock').data('text-day') +'</span> </div>'
                + '<div class="box"><div>%H</div> <span>'+ $('#clock').data('text-hour') +'</span> </div>'
                + '<div class="box"><div>%M</div> <span>'+ $('#clock').data('text-minute') +'</span> </div>'
                + '<div class="box"><div>%S</div> <span>'+ $('#clock').data('text-second') +'</span> </div>'));
            }
        });
    }

    if ($("#wish-form").length) {
        $("#wish-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                content: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: false,
                    email: true
                },
            },

            messages: {
                name: {
                    required: 'Vui lòng nhập tên của bạn.',
                    minlength: 'Tên phải lớn hơn 5 ký tự.',
                },
                content: {
                    required: 'Vui lòng nhập lời chúc.',
                    minlength: 'Lời chúc phải lớn hơn 10 ký tự.',
                },
                email: {
                    email: 'Địa chỉ email không hợp lệ.'
                }
            },

            errorPlacement: function(error, element) {
				if (element.attr("name") == "content" ) {
				  error.insertAfter("#wish-form .vitualTextarea");
				} else {
				  error.insertAfter(element);
				}
			},
            submitHandler: function (form) {
                $("#loader").css("display", "inline-block");
                $.ajax({
                    type: "POST",
                    url: "/wish",
                    data: $(form).serialize(),
                    success: function (res) {
                        $( "#loader").hide();
                        if(!res.error){
                            $('.wish-box').scrollTop(0);
                            $('.wish-box').prepend('<div class="wish-box-item bg"><strong>'+$(form).find("input[name='name']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'</strong><p>'+$(form).find("textarea[name='content']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'</p></div>');
                            $( "#success").html(res.message).slideDown( "slow" );
                            setTimeout(function() {
                            $( "#success").slideUp( "slow" );
                            }, 5000);
                        }else{
                            $( "#error").html(res.message).slideDown( "slow" );
                            setTimeout(function() {
                            $( "#error").slideUp( "slow" );
                            }, 5000);
                        }

                        form.reset();
                    },
                    error: function() {
                        $( "#loader").hide();
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false;
            }

        });
    }

    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-play-btn").length) {
        $(".video-play-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }
    
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid =  $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    masonryGridSetting();
    
            /*------------------------------------------
    = MENU ACCESSBILITY
    -------------------------------------------*/
    $('.btn-menu-open').click(function() {
        $('ul.list-menu-icon').css('opacity','1');
        $('ul.list-menu-icon').css('pointer-events','');
        $('.btn-menu-close').show();
        $('.btn-menu-open').hide();
    })
    $('.btn-menu-close').click(function() {
        $('ul.list-menu-icon').css('opacity','0');
        $('ul.list-menu-icon').css('pointer-events','none');
        $('.btn-menu-open').show();
        $('.btn-menu-close').hide();
    })
    setTimeout(() => {
        $('.btn-menu-open').hide();
        $('.btn-menu-close').show();
        $('ul.list-menu-icon').css('opacity','1');
    }, 3000);
    function shakeTooltip(){
        var arrTooltip = $('ul.list-menu-icon').children();
        arrTooltip.each(function(index) {
            setTimeout(() => {
                if(document.querySelector('.btn-menu-close').style.display !== "none"){  
                    $(this).addClass('shake');
                    $(this).children().children().children('.tooltiptext').css('visibility','visible');
                    setTimeout(() => {
                        $(this).children().children().children('.tooltiptext').css('visibility','');
                        $(this).removeClass('shake');
                    }, 3000);
                } else{
                    return false;
                }
            }, index*5000); 
        });   
    }
    if($('#menu-access').length >0){
        setTimeout(() => {
            shakeTooltip();
            myInterval = setInterval(shakeTooltip, 20000);
        }, 3000);
    }
    $('.btn-menu-close').click(function(){
        $('tooltiptext').css('visibility','');
        clearInterval(myInterval);
    });

    // ALBUM GALLERIES
	$(document).on('click', '.btn-see-more-gallery', function(e){
		e.preventDefault();
		let indexNumber = $(this).data('index') || 0;
		$(this).lightGallery({
		thumbnail: true,
		dynamic: true,
		dynamicEl: photoGalleries,
		download: true,
		autoplay: true,
		preload: 2,
		appendSubHtmlTo: '.lg-item',
		index: parseInt(indexNumber)
		});
	});

    $(document).on('click', '.qr-code-image', function(){
        let srcImage = $(this).attr('src');
        $(this).lightGallery({
            thumbnail: true,
            dynamic: true,
            dynamicEl:  [{
                src: srcImage,
            }],
            download: true,
            autoplay: true,
            preload: 2,
            appendSubHtmlTo: '.lg-item',
        });
    });
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

$(window).scroll(function() {
	
	   // Shrink Navbar on Scroll 	

	  if ($(document).scrollTop() > 50) {
		$('.wd_header_wrapper').addClass('fixed');
	  } else {
		$('.wd_header_wrapper').removeClass('fixed');
	  }
	  
});


   
      
    /*============================================ Call Functions on Document.Ready ============================================*/
    _doc.ready(Egprojets.documentReady);
    /*============================================ Call Functions on Window.Load ============================================*/
    _win.on('load',Egprojets.windowLoad);
})(jQuery, window, window.document);

/*============================================ End Custom Functions  ============================================*/