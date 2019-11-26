
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
// $(document).ready(function() {
//     $('form[id="second_form"]').validate({
//         rules: {
//           service: 'required',
//           lname: 'required',          
//           tel: {
//             required: true,
//             minlength: 8,
//           }
//         },
//         messages: {
//           service: 'Поле пустое',
//           lname: 'Поле пустое',
//           tel: {
//             required: 'Поле пустое',
//             minlength: 'Телефон должен содержать не меньше 8 символов'
//           }
//         },
//         submitHandler: function(form) {
//           form.submit();
//         }
//       });
//   });

//------Bot



var name = $('#fio').value;
var phone = $('#tel').value;
var email = $('#service').value;

//в переменную $token нужно вставить токен, который нам прислал @botFather
var token = "1022559271:AAF0gnWbxzfESDiGBjZ9KgpEj4O8ZLJ25NE";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
var chat_id = "510302288";
$('#submit').click(function () {
    var txt = name + " " + phone + " " + email;
    var gram = "https://api.telegram.org/bot" + $token + "/sendMessage?chat_id=" + $chat_id + "&text=" + txt;
    $("#second_form").attr("action", "gram");
})

// ---- UL
$(".five li ul").hide();
$(".five li:has('.submenu')").hover(
    function () {
        $(".five li ul").stop().fadeToggle(300);
    }
);
//-----mastera

$(document).ready(function () {
    $(".openokno2").click(function () {
        $(".blockcentr2").slideToggle("2000");
    });
});
// ------- окно

function showPopUp(type) {    
    var div = document.querySelector('.okn');
    var p = document.querySelector('.sent');
    setTimeout(function () { div.classList.toggle('hid');}, 5000);
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

window.onload = function(){
    $('.owl-items').hover(activUP);
}
function activUP(){
    this.classList.toggle("h");
}