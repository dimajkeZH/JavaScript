		function bodyAnimateScroll(top) {
			$('html, body').stop().animate({
				scrollTop: top
			}, 400)
		}

		$('a').on('click', function(event) {
			event.preventDefault();
			var selector = $(this).attr('href');
			var top = $(selector).offset().top
			bodyAnimateScroll(top)
		});

		$('#up').on('click', function() {
			bodyAnimateScroll(0)	
		})


		function toggleUpBtn() {
			if ($('body').scrollTop() > window.innerHeight) {
				$('#up').addClass('active')
			} else {
				$('#up').removeClass('active')
			}
		}

		toggleUpBtn()

		$(window).on('scroll', function() {
			toggleUpBtn()
		})