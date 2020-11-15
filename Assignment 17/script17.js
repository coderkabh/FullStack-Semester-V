const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function showtime() {
    let today = new Date();                         //Wed Nov 11 2020 23:03:16 GMT+0530 (India Standard Time)
    let hour = today.getHours();                   //23
    let min = today.getMinutes();                   //03
    let sec = today.getSeconds();                   //16
    let todayDate = today.toDateString();           ///Wed Nov 11 2020

    const ampm = hour > 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;                           //hour = 12%12 = 0

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    date.innerHTML = `${todayDate}`;

    //hh:mm:ss AM(Required Time Format)

    setTimeout(showtime, 1000);

    function addZero(n) {
        return (parseInt(n, 10) < 10 ? "0" : "") + n;
    }
}

function setGreeting() {
    let today = new Date(2020, 12, 12, 22, 12, 11);
    let hour = today.getHours();

    if (hour < 12) {

        document.body.style.backgroundImage = 'url("../images/morning.jpg")';
        greeting.innerHTML = "Good Morning";
    } else if (hour > 12) {
        document.body.style.backgroundImage = 'url("../images/evening.jpg")';
        greeting.innerHTML = "Good Evening";
    } else {
        document.body.style.backgroundImage = 'url("../images/afternoon.jpg")';
        greeting.innerHTML = "Good Afternoon";
    }
}

function getName() {
    if (localStorage.getItem('myName') === null) {
        name.innerHTML = "[Enter Name]";
    } else {
        name.innerHTML = localStorage.getItem('myName');
    }
}

//create a function to store data in local storage
function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myName', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('myName', e.target.innerHTML);
    }
}


showtime();
setGreeting();
getName();