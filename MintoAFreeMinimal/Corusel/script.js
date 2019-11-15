function plus(){
   var n1, n2, result;
n1 = document.getElementById('n1').value;
n1 = parseInt(n1);
n2 = document.getElementById('n2').value;
n2 = parseInt(n2);
result = n1 + n2;
document.getElementById('out').innerHTML = result;
}
function minus(){
    var n1, n2, result;
 n1 = document.getElementById('n1').value;
 n1 = parseInt(n1);
 n2 = document.getElementById('n2').value;
 n2 = parseInt(n2);
 result = n1 - n2;
 document.getElementById('out').innerHTML = result;
 }


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