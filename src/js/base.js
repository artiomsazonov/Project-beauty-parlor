//olcorusel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        merge: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
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

var timeoutId;
$('.owl-items ').hover(function () {
    clearTimeout(timeoutId);
    $(this).children(".btn_button").show();
}, function () {
    timeoutId = setTimeout($.proxy($(this).children(".btn_button"), 'hide'), 1000)
});

// modal word

var modal = document.getElementById('mdl');
document.addEventListener('click', function (event) {
    var id = event.target.dataset.toggleId;
    if (!id) return;
    modal.hidden = !modal.hidden;
});
var span = document.getElementsByClassName("cross")[0];


span.onclick = function () {
    modal.hidden = !modal.hidden;
}
// //---valid


$(document).ready(function () {
    $('#second_form').submit(function (e) {
        var vidUs = $('#vidUs').val();
        var last_name = $('#lname').val();
        var tel = $('#tel').val();
        e.preventDefault();
        $(".error").remove();
        if (vidUs.length < 1) {
            $('#vidUs').after('<span class="error">Поле пустое</span>');
        }
        if (last_name.length < 1) {
            $('#lname').after('<span class="error">Поле пустое</span>');
        }
        if (tel.length < 8) {
            $('#tel').after('<span class="error">Телефон должен содержать не меньше 8 символов</span>');
        }
    });
});
//------Bot
var vidUs = document.querySelector('#vidUs');
var last_name = document.querySelector('#lname');
var tel = document.querySelector('#tel');
var sendMsg = document.querySelector('#submit');
sendMsg.addEventListener('click', function () {
    if (vidUs.value && last_name.value && tel.value) {
        msg = 'Name: ' + last_name.value + ' ' + '; Tel: ' + tel.value + "; Usluga" + vidUs.value;
        var botLink = 'https://api.telegram.org/bot1022559271:AAF0gnWbxzfESDiGBjZ9KgpEj4O8ZLJ25NE/sendMessage?chat_id=510302288&text=' + msg;
        fetch(botLink);
        clearInputs();
        sendMsg.classList.add('success');
        sendMsg.innerHTML = '&#10004;';
        setTimeout(function () {
            if (sendMsg.classList.contains('success')) {
                sendMsg.classList.remove('success');
                sendMsg.innerHTML = 'Отправить';
            }
        }, 2000)
    } else {
        checkInputs()
    }
})
function clearInputs() {
    var inputX = document.querySelectorAll("input")
    for (var i = 0; i < inputX.length; i++) {
        inputX[i].value = "";
    }
}
// ---- UL
$(".five li ul").hide();
$(".five li:has('.submenu')").hover(
    function () {
        $(".five li ul").stop().fadeToggle(300);
    }
);
//-----mastera

$(document).ready(function () {
    $('.openokno').click(activ);
})
function activ() {
    $(this).next(".blockcentr").slideToggle("2000");
    $(this).parent(".blockcentr").slideToggle("2000");

}

// ------- окно

function showPopUp(type) {
    var div = document.querySelector('.okn');
    var p = document.querySelector('.sent');
    setTimeout(function () { div.classList.toggle('hid'); }, 5000);
    switch (type) {
        case "galerey":
            div.classList.add('err');
            div.classList.toggle('hid');
            p.innerHTML = 'Хочешь скидку мастера, подпишись на его профиль в инстаграме(ссылка в описании мастера)&#8595;';
            break;
        case "uslugi":
            div.classList.add('ale');
            div.classList.toggle('hid');
            p.innerHTML = 'Хочешь скидку мастера, подпишись на его профиль в инстаграме(ссылка в описании мастера)&#8595;';
            break;
        case "aboutus":
            div.classList.add('msg');
            div.classList.toggle('hid');
            p.innerHTML = 'Хочешь скидку мастера, подпишись на его профиль в инстаграме(ссылка в описании мастера)&#8595;';
            break;
    }
}
setTimeout(function () { showPopUp(document.querySelector(".shuwP").getAttribute('name')) }, 2000);
//---galerey

window.onload = function () {
    $('.galerey-items img').hover(activUP);
}
function activUP() {
    this.classList.toggle('animated');
    this.classList.toggle('rubberBand');
}

// usluga
$(".usl").hover(function () {
    $(this).children("img").css(
        "border-radius", "70%"
    )
}, function () {
    $(this).children("img").css(
        "border-radius", "5%"
    )
})
//
