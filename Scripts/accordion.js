$('.accordion-item__header').on('click', function () {
			var content = $(this).next()
			var parent = $(this).parent()
			if (parent.hasClass('active')) {
				parent.removeClass('active')
				content.stop().slideUp(400)
			} else {
				$('.accordion-item.active')
					.removeClass('active')
					.find('.accordion-item__content')
					.stop()
					.slideUp(400)
				
				parent.addClass('active')
				content.stop().slideDown(400)
			}
		});

 (function($){
        $(window).on("load",function(){
            $(".accordion-item__content").mCustomScrollbar();
        });
    })(jQuery);
$(document).ready(function(){
  $('.caorusel').slick({
  	prevArrow: $('.prev'),
		nextArrow: $('.next'),
  });
});

$('button').on('click', function() {
			$('.main_nav nav').toggleClass('active')
		});

		$(window).on('resize', function() {
			if (window.innerWidth > 1024) {
				$('.main_nav nav').removeClass('active')
			}
		})