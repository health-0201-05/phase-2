document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
});

localStorage.fullname = "Enter User's Name Here";
document.getElementById("name").innerHTML=localStorage.fullname;

function changeNamePrompt() {
  document.getElementById("name").contentEditable = "true";
  document.getElementById("name").focus();
}

function disableNameprompt() {
  document.getElementById("name").contentEditable = "false";
}

document.querySelector(".user-name").addEventListener("keydown", event => {
  if(event.key !== "Enter") return; // Use `.key` instead.
  event.preventDefault();
  disableNameprompt();
})

document.querySelector(".user-name").addEventListener("blur", event => {
  console.log('fired');
  disableNameprompt();
  localStorage.fullname = document.getElementById("name").textContent;
})

function addHobby(){
  console.log("it ran");
}

/*Code adapted from www.w3schools.com/howto/howto_js_popup.asp*/
const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

popupButton.addEventListener('click', openPopup);
closePopup.addEventListener('click', closePopupFunction);

function openPopup() {
  popup.style.display = 'block';
}

function closePopupFunction() {
  popup.style.display = 'none';
}