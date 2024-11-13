;(function ($) {

$(document).ready(function() {


$('.myAnchor').parent().prev().hide();



	if ($(window).width() > 1025)
		{
	
	var swiper = new Swiper(".reviews-swiper", {
		spaceBetween: 30,
		loop:false,
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
	   /*Return bullets as numbers*/
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
			},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
			navigation: false,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		},
		
	  });
	
	}

	  if ($(window).width() < 1024)
		{

		var swiper = new Swiper(".reviews-swiper", {
			spaceBetween: 30,
			loop:false,
			grabCursor: true,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
				},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
					navigation: false,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				},
			
			});
	}


	$(document).foundation();

	// Show or hide the button based on scroll position
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$('#scrollUpButton').fadeIn();
		} else {
			$('#scrollUpButton').fadeOut();
		}
	});

	// Scroll to top when the button is clicked
	$('#scrollUpButton').click(function() {
		$('html, body').animate({scrollTop: 0}, '300');
		return false;
	});

	var tabs = $('.tabs-title a');
	tabs.each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			var target = $(this).attr('href');
			$(target).focus();
		});
	});

	document.addEventListener('click', function(event) {
		if (event.target.closest('.tabs-title a')) {
			document.body.classList.add('hide-general-tab');
		}
	});

	$('.header-phone > li').click(function() {
		$( this ).toggleClass( "active" );
	});

	$('.top-menu > li > a').click(function() {
		$( this ).parent().toggleClass( "active" );
	});
	// $('.toggle-topbar >  a').click(function() {
	// 	$( this ).closest('.top-bar').toggleClass( "active" );
	// });


	$('.toggle-topbar > a').click(function() {
		var topBar = $(this).closest('.top-bar');
		topBar.toggleClass("active");
		$('body').toggleClass("active", topBar.hasClass("active"));
	});

	
	$('.header-btns a').on('click', function(event) {
        event.preventDefault(); 

        var target = $(this).attr('href'); 
        var headerHeight = $('header').outerHeight(); 


        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 800); 
    });

	$('.no-hash > a').click(function(event) {
		event.preventDefault();
	});

	$(document).click(function(event) {

		if (!$(event.target).closest(".header-phone > li").length) {
		  $("body").find(".header-phone > li").removeClass("active");
		}
		if (!$(event.target).closest(".top-menu > li").length) {
			$("body").find(".top-menu > li").removeClass("active");
		  }
	  });

	$(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('#modal-thank').length) {
            $('#modal-thank').parent().removeClass('active');
        }
    });

    $('#modal-thank').click(function(event) {
        event.stopPropagation();
    });

    var listItems = $('.tabs li');
    var lastOddItem = null;
    listItems.each(function(index) {
        if ((index + 1) % 2 !== 0) {
            lastOddItem = $(this);
        }
    });

    if (lastOddItem) {
        lastOddItem.addClass('odd-last');
    }


	document.addEventListener( 'wpcf7mailsent', function( event ) {
		$('#modal-thank').parent().addClass('active');
	}, false );

	document.addEventListener( 'close-button', function( event ) {
		$('#modal-thank').parent().removeClass('active');
	}, false );

	$('#modal-thank .close-button').click(function() {
		$('#modal-thank').parent().removeClass('active');
	});



	
});

$(window).load(function() {

	
});

}(jQuery));




