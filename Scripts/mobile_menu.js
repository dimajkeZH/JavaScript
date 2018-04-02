$('button').on('click', function() {
			$('.main_nav nav').toggleClass('active')
		});

		$(window).on('resize', function() {
			if (window.innerWidth > 1024) {
				$('.main_nav nav').removeClass('active')
			}
		})