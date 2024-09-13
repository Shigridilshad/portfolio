

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


 // 1. Scroll To Top 
 $(window).on('scroll',function () {
	if ($(this).scrollTop() > 600) {
		$('.return-to-top').fadeIn();
	} else {
		$('.return-to-top').fadeOut();
	}
});
$('.return-to-top').on('click',function(){
		$('html, body').animate({
		scrollTop: 0
	}, 1500);
	return false;
});
