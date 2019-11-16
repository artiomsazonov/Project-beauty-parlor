
//olcorusel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin:10,
        merge:true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }

    })
})
//---Hamburger
$(function(){
	
	$('.menuBurger').on('click', function(){
		
		$('.menu').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
		
	});
	
 });
	
});
//------goUp----
var appended = false;
$(window).scroll(function () {
   var scroll = $(document).scrollTop();
    if (scroll > 10) {
        if (!appended) {
            $('.goUp').removeClass('none');
            appended = true;
        }
    }else if (appended){
        $('.goUp').addClass('none');
        appended = false;
    }
});


$(document).ready(function () {
    $('.goUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
});
