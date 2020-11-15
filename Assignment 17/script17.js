const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString();

    const ampm = hour > 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    date.innerHTML = `${todayDate}`;



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