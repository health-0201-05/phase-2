let page_num = 1;
let user_name = 'Unknown';
let user_gender = 'Unknown';
let user_age = 'Unknown';
let user_height = 'Unknown';

function nextClicked() {
    if (page_num < 6) {
        if (page_num==1) {
            document.getElementById("screen"+page_num).style.display = "none";
            document.getElementById("screen"+(page_num+1)).style.display = "block";
            document.getElementById("name").select();
            page_num++;
        }
        else if (page_num==2) {
            if(document.querySelector('input[name="gender"]:checked') != null){
                document.getElementById("screen"+page_num).style.display = "none";
                document.getElementById("screen"+(page_num+1)).style.display = "block";
                user_gender = document.querySelector('input[name="gender"]:checked').value;
                page_num++;   
            }
        }
        else if (page_num==3) {
            document.getElementById("screen"+page_num).style.display = "none";
            document.getElementById("screen"+(page_num+1)).style.display = "block";
            page_num++;
        }
        else if (page_num==4) {
            if (parseInt(document.getElementById("age").value, 10) < 0) {
                document.getElementById("warning-text").innerHTML = "<p class='warning' id='warning-text'>Please make sure age is not negative.</p>";
            }
            else if (parseInt(document.getElementById("age").value, 10) >= 0){
                document.getElementById("screen"+page_num).style.display = "none";
                document.getElementById("screen"+(page_num+1)).style.display = "block";
                page_num++;
            }
        }
        else if (page_num==5){
            if (parseInt(document.getElementById("height-feet").value, 10) < 0 || parseInt(document.getElementById("height-inch").value, 10) < 0) {
                document.getElementById("warning-height").innerHTML = "<p class='warning' id='warning-height'>Please make sure height is not negative</p>";
            }
            else if (parseInt(document.getElementById("age").value, 10) >= 0){
                window.location.replace("index.html?data="+user_name+";"+user_age+";"+user_height+";"+user_gender+";[0,0,0,0,0,0,0,0];[0,0,0,0,0,0,0,0]");
            }
        }
    }
}

function iAge() {
    const ageInput = document.getElementById('age');
    let age = parseInt(ageInput.value);
    age = isNaN(age) ? 0 : age;
    ageInput.value = age + 1;
    user_age = ageInput.value;
}

function dAge() {
    const ageInput = document.getElementById('age');
    let age = parseInt(ageInput.value);
    age = isNaN(age) ? 0 : age;
    ageInput.value = age - 1;
    user_age = ageInput.value;
}
    
function skipClicked() {
    window.location.replace("index.html?data="+user_name+";"+user_age+";"+user_height+";"+user_gender+";[0,0,0,0,0,0,0,0]");
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
    
    document.querySelector(".name-text").addEventListener("blur", event => {
        user_name = document.getElementById("name").value;
    });

    document.querySelector(".age-number").addEventListener("blur", event => {
        user_age = document.getElementById("age").value;
    });

    document.querySelector(".height-feet-number").addEventListener("blur", event => {
        user_height = document.getElementById("height-feet").value + "$"+document.getElementById("height-inch").value;
    });

    document.querySelector(".height-inch-number").addEventListener("blur", event => {
        user_height = document.getElementById("height-feet").value + "$"+document.getElementById("height-inch").value;
    });
});