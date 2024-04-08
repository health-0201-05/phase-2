document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');

    // open text tab first by default
    var item = document.getElementById('defaultOpen');
    //item.click();
});

function dayClickSum(){
    document.getElementById("summary").innerHTML= 
    "<div class=\"subtitle\"><b>Summary</b></div>"
    + "<div class=\"day-title\"><b>Today</b></div>"
    + "<button class=\"time-button\" style=\"right: 190px\"><b>Day</b></button>"
    + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClickSummary()\"><b>Week</b></button>"
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>";
}

function weekClickSummary(){
    document.getElementById("summary").innerHTML= 
    "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClickSum()\"><b>Day</b></button>"
    + "<button class=\"time-button\" style=\"right: 110px; width: 62px\"><b>Week</b></button>"
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>"
    + "<button class=\"day-button\" style=\"left:30px\"><b>Su</b></button>"
    + "<button class=\"day-button\" style=\"left:110px\"><b>M</b></button>"
    + "<button class=\"day-button\" style=\"left:190px\"><b>T</b></button>"
    + "<button class=\"day-button\" style=\"left:270px\"><b>W</b></button>"
    + "<button class=\"day-button\" style=\"left:350px\"><b>Th</b></button>"
    + "<button class=\"day-button\" style=\"left:430px\"><b>F</b></button>"
    + "<button class=\"day-button\" style=\"left:510px\"><b>S</b></button>";
}

function weekClickWorkouts(){
    document.getElementById("workouts").innerHTML=
    "<button class=\"day-button\" style=\"left:30px\"><b>Su</b></button>"
    + "<button class=\"day-button\" style=\"left:110px\"><b>M</b></button>"
    + "<button class=\"day-button\" style=\"left:190px\"><b>T</b></button>"
    + "<button class=\"day-button\" style=\"left:270px\"><b>W</b></button>"
    + "<button class=\"day-button\" style=\"left:350px\"><b>Th</b></button>"
    + "<button class=\"day-button\" style=\"left:430px\"><b>F</b></button>"
    + "<button class=\"day-button\" style=\"left:510px\"><b>S</b></button>";
}