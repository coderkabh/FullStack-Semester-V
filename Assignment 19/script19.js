//selector
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const form3 = document.getElementById('form-3');

const next1 = document.getElementById('next-1');
const next2 = document.getElementById('next-2');
const back1 = document.getElementById('back-1');
const back2 = document.getElementById('back-2');

const progress = document.getElementById('progress');

//event handler
next1.onclick = function () {
    form1.style.left = "-450px"
    form2.style.left = "40px"
    progress.style.width = "240px";
}

back1.onclick = function () {
    form1.style.left = "40px"
    form2.style.left = "450px"
    progress.style.width = "120px";
}

next2.onclick = function () {
    form2.style.left = "-450px"
    form3.style.left = "40px"
    progress.style.width = "360px";
}

back2.onclick = function () {
    form2.style.left = "40px"
    form3.style.left = "450px"
    progress.style.width = "240px";
}