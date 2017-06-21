$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll-top').fadeIn();
      $('.scroll-top').addClass('flex flex-ac flex-jc');
		} else {
			$('.scroll-top').fadeOut();
      $('.scroll-top').removeClass('flex flex-ac flex-jc');
		}
	});

	//Click event to scroll to top
	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
    $('.scroll-top').removeClass('flex flex-ac flex-jc');
		return false;
	});
});
