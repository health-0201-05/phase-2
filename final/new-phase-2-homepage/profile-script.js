let params = window.location.href.split('?data=')[1].split(';');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');
  if (params.length > 1) {
    localStorage.name = params[0];
    localStorage.age = "Age: "+params[1];
    localStorage.height = params[2].split('$')[0]+"'"+params[2].split('$')[1]+"''";
    localStorage.gender = "Gender: "+params[3];
  }
  document.getElementById("name").innerHTML = localStorage.name;
  document.getElementById("age").innerHTML = localStorage.age;
  document.getElementById("height").innerHTML = localStorage.height;
  document.getElementById("gender").innerHTML = localStorage.gender;
  loadBadges();
});

function gotoHome() {
  window.location.replace("index.html?data="+window.location.href.split('?data=')[1]);
}

function addBadge(x) {
  document.getElementById("badges").innerHTML += '<div onClick="removeBadge('+x+')" class="grid-item" id="a'+x+'"> <img class="badge-image" src="badge'+x+'.png"></div>';
  document.getElementById("b"+x).outerHTML = '';
  temp_a = JSON.parse("["+localStorage.badges+"]");
  temp_a[x] = 1;
  localStorage.badges = temp_a;
  console.log(localStorage.badges);
}

function removeBadge(x) {
  document.getElementById("unpicked").innerHTML += '<div onClick="addBadge('+x+')" class="grid-item2" id="b'+x+'"><img class="badge-image" src="badge'+x+'.png">  </div>';
  document.getElementById("a"+x).outerHTML = '';
  temp_a = JSON.parse("["+localStorage.badges+"]");
  temp_a[x] = 0;
  localStorage.badges = temp_a;
  console.log(localStorage.badges);
}

function loadBadges() {
  if (localStorage.badges==null) {
    localStorage.badges = [0,0,0,0,0,0,0];
  }
  else {
    temp_a = JSON.parse("["+localStorage.badges+"]");
    temp_a.forEach((item, x) => {
      if (item==1){
        document.getElementById("badges").innerHTML += '<div onClick="removeBadge('+x+')" class="grid-item" id="a'+x+'"> <img class="badge-image" src="badge'+x+'.png"></div>';
        document.getElementById("b"+x).outerHTML = '';
      }
    });
  }
}

function changeNamePrompt() {
  document.getElementById("name").contentEditable = "true";
  document.getElementById("name").focus();
}

function disableNameprompt() {
  document.getElementById("name").contentEditable = "false";
}

function changeHeightPrompt() {
  document.getElementById("height").contentEditable = "true";
  document.getElementById("height").focus();
}

function disableHeightprompt() {
  document.getElementById("height").contentEditable = "false";
}

document.querySelector(".user-name").addEventListener("keydown", event => {
  if(event.key !== "Enter") return;
  event.preventDefault();
  disableNameprompt();
})

document.querySelector(".user-name").addEventListener("blur", event => {
  disableNameprompt();
  localStorage.name = document.getElementById("name").textContent;
})

document.querySelector(".user-height").addEventListener("keydown", event => {
  if(event.key !== "Enter") return;
  event.preventDefault();
  disableHeightprompt();
})

document.querySelector(".user-height").addEventListener("blur", event => {
  disableHeightprompt();
  localStorage.height = document.getElementById("height").textContent;
})

/*Code adapted from www.w3schools.com/howto/howto_js_popup.asp*/
const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

closePopup.addEventListener('click', closePopupFunction);

function openPopup() {
  popup.style.display = 'block';
}

function closePopupFunction() {
  popup.style.display = 'none';
}