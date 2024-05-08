let params = window.location.href.split('?data=')[1];

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('JavaScript loaded!');

    entries.addEventListener('touchstart', e=>{
        touchstartX = e.changedTouches[0].screenX;
    })

    entries.addEventListener('touchend', e=>{
        touchendX = e.changedTouches[0].screenX;
        checkDirection()
    })
});

function gotoProfile() {
    window.location.replace("profile-page.html?data="+params);
}

function gotoStats() {
    window.location.replace("statistics.html?data="+params);
}

function gotoExercise() {
    window.location.replace("exercise.html?data="+params);
}
function gotoNutrition() {
    window.location.replace("nutrition.html?data="+params);
}
function gotoFriends() {
    window.location.replace("view-friends.html?data="+params);
}

function openMenu() {
    document.getElementById("menu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.querySelector(".overlay");
    document.body.classList.toggle("menu-open");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
        overlay.style.display = "none";
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
        menu.style.width = "250px";
        overlay.style.display = "block";
    }
}

/*Code adapted from Damjan Pavlica*/
/*https://stackoverflow.com/users/3576214/damjan-pavlica*/
const entries = document.querySelector('.gallery-entries');
let touchstartX = 0;
let touchendX = 0;
let curEntry = 1;
let numEntries = 3;
let curTranslate = 0;

function checkDirection() {
    if (touchendX < touchstartX && touchstartX - touchendX > 50) {
        console.log('swiped left! %d', touchstartX - touchendX)
        if (curEntry < numEntries) {
            entries.style.transition = 'transform 0.3s ease-in-out';
            curTranslate += -572;
            entries.style.transform = `translateX(${curTranslate}px)`;
            curEntry++;
        }
    }
    if (touchendX > touchstartX && touchendX - touchstartX > 50) {
        console.log('swiped right! %d', touchendX - touchstartX)
        if (curEntry > 1) {
            entries.style.transition = 'transform 0.3s ease-in-out';
            curTranslate += 572;
            entries.style.transform = `translateX(${curTranslate}px)`;
            curEntry--;
        }
    }
}