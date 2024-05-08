let params = window.location.href.split('?data=')[1];
let searchMode = 0;
let friendsList = [];
let individual_params = params.split(';');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');
  localStorage.interests = individual_params[4];
  localStorage.friends = individual_params[5];
  console.log(localStorage.friends);
  temp_a = JSON.parse(localStorage.friends);
  friendsList = temp_a;
  temp_a.forEach((item, x) => {
    console.log(item);
    if (item==1){
      updateAvailable(x);
    }
  });
});

function addF(x) {
  friendsList[x] = 1;
  individual_params[5] = "["+friendsList+"]";
  params = individual_params.join(';');
  console.log(params);
  updateAvailable(x);
  console.log(params)
}

function updateAvailable(x) {
  document.getElementById("user"+x).outerHTML = '';
}

function gotoHome() {
  window.location.replace("index.html?data="+params);
}

function gotoFriends() {
  window.location.replace("view-friends.html?data="+params);
}


addEventListener("change", (event) => {
  console.log("changed");
});

function selectID(){
  if (searchMode == 0){
    document.getElementById('id-button').classList.replace('search-button','search-button-selected');
    document.getElementById('username-button').classList.replace('search-button-selected','search-button');
    searchMode=1;
    updateSearch();
  }
}

function selectUN(){
  if (searchMode == 1){
    document.getElementById('username-button').classList.replace('search-button','search-button-selected');
    document.getElementById('id-button').classList.replace('search-button-selected','search-button');
    searchMode=0;
    updateSearch();
  }
}

/*Code adapted from https://www.w3schools.com/howto/howto_js_filter_lists.asp*/
function updateSearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("user-list");
  li = ul.getElementsByTagName('li');

  if (searchMode==0){
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  else if (searchMode==1){
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}