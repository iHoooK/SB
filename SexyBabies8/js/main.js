var window__1 = document.getElementById('window__1');
var window__2 = document.getElementById('window__2');
var window__3 = document.getElementById('window__3');
var window__4 = document.getElementById('window__4');
var window__5 = document.getElementById('window__5');


var w1__button = document.getElementById('w1__button');
var w2__button = document.getElementById('w2__button');
var w3__button = document.getElementById('w3__button');
var w4__button = document.getElementById('w4__button');


w1__button.onclick = function () {
    window__1.style.display = "none";
    window__2.style.display = "block";
}
w2__button.onclick = function () {
    window__2.style.display = "none";
    window__3.style.display = "block";
}
w3__button.onclick = function () {
    window__3.style.display = "none";
    window__4.style.display = "block";
}
w4__button.onclick = function () {
    window__4.style.display = "none";
    window__5.style.display = "block";
}