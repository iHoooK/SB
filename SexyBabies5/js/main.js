var fhoto1 = document.getElementById('f1');
var fhoto2 = document.getElementById('f2');
var fhoto3 = document.getElementById('f3');
var fhoto4 = document.getElementById('f4');

var question1 = document.getElementById('q1');
var question2 = document.getElementById('q2');
var question3 = document.getElementById('q3');

var answers1 = document.getElementById('a1');
var answers2 = document.getElementById("a2");
var answers3 = document.getElementById("a3");

var scale1 = document.getElementById('s1');
var scale2 = document.getElementById("s2");
var scale3 = document.getElementById("s3");

var answer1_1 = document.getElementById("ans1-1");
var answer1_2 = document.getElementById("ans1-2");
var answer1_3 = document.getElementById("ans1-3");

var answer2_1 = document.getElementById("ans2-1");
var answer2_2 = document.getElementById("ans2-2");
var answer2_3 = document.getElementById("ans2-3");

var answer3_1 = document.getElementById("ans3-1");
var answer3_2 = document.getElementById("ans3-2");
var answer3_3 = document.getElementById("ans3-3");

var title1 = document.getElementById('t1');
var title2 = document.getElementById('t2');

var subtitle1 = document.getElementById('sub1');
var subtitle2 = document.getElementById('sub2');

var body1 = document.getElementById('b1');
var body2 = document.getElementById('b2');

answer1_1.onclick = function () {
    console.log('go step 2')

    fhoto1.style.display = "none";
    fhoto2.style.display = "block";

    question1.style.display = "none";
    question2.style.display = "block";

    answers1.style.display = "none";
    answers2.style.display = "flex";

    scale1.style.display = "none";
    scale2.style.display = "flex";
}
answer1_2.onclick = function () {
    console.log('go step 2')

    fhoto1.style.display = "none";
    fhoto2.style.display = "block";

    question1.style.display = "none";
    question2.style.display = "block";

    answers1.style.display = "none";
    answers2.style.display = "flex";

    scale1.style.display = "none";
    scale2.style.display = "flex";
}
answer1_3.onclick = function () {
    console.log('go step 2')

    fhoto1.style.display = "none";
    fhoto2.style.display = "block";

    question1.style.display = "none";
    question2.style.display = "block";

    answers1.style.display = "none";
    answers2.style.display = "flex";

    scale1.style.display = "none";
    scale2.style.display = "flex";
}
// ==============================
answer2_1.onclick = function () {
    console.log('go step 2')

    fhoto2.style.display = "none";
    fhoto3.style.display = "block";

    question2.style.display = "none";
    question3.style.display = "block";

    answers2.style.display = "none";
    answers3.style.display = "flex";

    scale2.style.display = "none";
    scale3.style.display = "flex";
}
answer2_2.onclick = function () {
    console.log('go step 2')

    fhoto2.style.display = "none";
    fhoto3.style.display = "block";

    question2.style.display = "none";
    question3.style.display = "block";

    answers2.style.display = "none";
    answers3.style.display = "flex";

    scale2.style.display = "none";
    scale3.style.display = "flex";
}
answer2_3.onclick = function () {
    console.log('go step 2')

    fhoto2.style.display = "none";
    fhoto3.style.display = "block";

    question2.style.display = "none";
    question3.style.display = "block";

    answers2.style.display = "none";
    answers3.style.display = "flex";

    scale2.style.display = "none";
    scale3.style.display = "flex";
}
// ==============================
answer3_1.onclick = function () {
    console.log('go step 2')

    fhoto3.style.display = "none";
    fhoto4.style.display = "block";

    body1.style.display = "none";
    body2.style.display = "flex";
}
answer3_2.onclick = function () {
    console.log('go step 2')

    fhoto3.style.display = "none";
    fhoto4.style.display = "block";

    body1.style.display = "none";
    body2.style.display = "flex";
}
answer3_3.onclick = function () {
    console.log('go step 2')

    fhoto3.style.display = "none";
    fhoto4.style.display = "block";

    body1.style.display = "none";
    body2.style.display = "flex";
}