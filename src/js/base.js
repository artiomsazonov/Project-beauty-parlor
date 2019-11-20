
//olcorusel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        merge: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })
})
//---Hamburger
$(function () {

    $('.menuBurger').on('click', function () {

        $('.menu').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
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
    } else if (appended) {
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
//btn hidden----

var linc2 = $('.btn_button'),
    timeoutId;
$('.owl-items img').hover(function () {
    clearTimeout(timeoutId);
    linc2.show();
}, function () {
    timeoutId = setTimeout($.proxy(linc2, 'hide'), 1000)
});
linc2.mouseenter(function () {
    clearTimeout(timeoutId);
}).mouseleave(function () {
    linc2.hide();
});
// modal word

var modal = document.getElementById('mdl');
document.addEventListener('click', function(event) {
    var id = event.target.dataset.toggleId;
    if (!id) return;
    modal.hidden = !modal.hidden;
  });
  var span = document.getElementsByClassName("cross")[0];


span.onclick = function() {
    modal.hidden = !modal.hidden;
}

