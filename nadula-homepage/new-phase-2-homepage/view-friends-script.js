let params = window.location.href.split('?data=')[1];
let searchMode = 0;
let individual_params = params.split(';');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');
  updateList();
});

function updateList() {
  localStorage.friends = individual_params[5];
  console.log(localStorage.friends);
  temp_a = JSON.parse(localStorage.friends);
  ul = document.getElementById("user-list");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
  
  temp_a.forEach((item, x) => {
    console.log(item);
    if (item==1){
      document.getElementById("user"+x).style.display="";
    }
  });
}

function gotoAddFriends() {
  window.location.replace("friends.html?data="+params);
}

function gotoHome() {
  window.location.replace("index.html?data="+params);
}