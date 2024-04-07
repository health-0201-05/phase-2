document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
});
let page_num = 1;
function nextClicked() {
    document.getElementById("screen"+page_num).style.display = "none";
    document.getElementById("screen"+(page_num+1)).style.display = "block";
    if (page_num==1) document.getElementById("name").select();

    if (page_num==2) localStorage.fullname = document.getElementById("name").textContent;
    
    page_num++;
}

function iAge() {
  const ageInput = document.getElementById('age');
  let age = parseInt(ageInput.value);
  age = isNaN(age) ? 0 : age;
  ageInput.value = age + 1;
}

function dAge() {
  const ageInput = document.getElementById('age');
  let age = parseInt(ageInput.value);
  age = isNaN(age) ? 0 : age;
  ageInput.value = age - 1;
}