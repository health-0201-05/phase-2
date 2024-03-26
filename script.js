document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');

    // open text tab first by default
    var item = document.getElementById('defaultOpen');
    item.click();
});

// opens the tab that user clicks on
// based on w3schools tutorial https://www.w3schools.com/howto/howto_js_tabs.asp
function openTab(evt, tabName) {
    // declare variables
    var i, tabcontent, tablinks;
  
    // hide all tab pages
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // make all tabs inactive
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // show tab that user clicked on, make that tab active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* adopted from w3schools https://www.w3schools.com/howto/howto_js_todolist.asp */
window.onload = function main() {
  // add delete buttons to default list items
  var nodeList = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < nodeList.length; i++) {
    var delBtn = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    delBtn.className = "del"; // DELETE BUTTON CLASS NAME
    delBtn.appendChild(txt);
    nodeList[i].appendChild(delBtn);
  }

  // add "delete" onclick event to delete buttons
  var deletes = document.getElementsByClassName("del");
  var i;
  for (i = 0; i < deletes.length; i++) {
    deleteItem(deletes[i]);
  }

  // add "checked off" onclick event to all list items
  var list = document.getElementsByTagName('li');
  for(i = 0; i < list.length; i++){
    checkItem(list[i]);
  }
}

// toggle "checked" class on list items when clicked
function checkItem(listItem){
  listItem.addEventListener('click', function(ev) {
    var item = ev.currentTarget;

    if(item.className === 'checked'){
      item.classList.remove('checked');
    } else{
      item.className += 'checked';
    }
  }, false);
}

// hide deleted item from view
function deleteItem(delBtn){
  //console.log(delBtn)
  var items = Array.from(document.getElementsByTagName('li'));
  delBtn.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// create and add new to-do list item when "Add" button is clicked
function newElement() {
  var li = document.createElement("li");
  // get name of list item
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  // add onclick event listener to the new item
  checkItem(li);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tdList").appendChild(li);
  }

  // reset text input
  document.getElementById("input").value = "";

  // add delete button to the new item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "del";
  span.appendChild(txt);
  li.appendChild(span);
  deleteItem(span);
}

// Simply sets the visiblity of the popup container to
// none or block depending on whether it is currently visible
function openPopup() {
  var x = document.getElementById("popupContainer");
  if (x.style.display != "block") {
      x.style.display = "block";
  }
}

// .style.visibility did not want to work with the flex
// display so setting .style.display is the work around
function closePopup() {
  var x = document.getElementById("popupContainer");
  if (x.style.display != "none") {
      x.style.display = "none";
  }
}
