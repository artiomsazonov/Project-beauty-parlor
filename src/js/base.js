var images = [
   "../img/corusel/piling.png",
  "../img/corusel/vosstanovlenie.jpg",
   "../img/corusel/okrashivanie1.jpg",
];
var num = 0;

function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
// "http://akva-zona.ru/images/piling-dlya-lica.png",// "https://hqbeauty.by/wp-content/uploads/2019/05/blog-photo1.jpg",// "http://spaprofessional.su/images/2017/eyelash-tinting.jpg"// 