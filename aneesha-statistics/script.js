document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
    drawCharts();
    // open text tab first by default
    var item = document.getElementById('defaultOpen');
    //item.click();
});

function dayClick(id){
    document.getElementById(id).innerHTML = "";
    innerhtml = "";
    if(id === 'summary'){
        innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('summary')\"><b>Week</b></button>"
        + "<canvas id=\"stepsPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:-5%\"></canvas>"
        + "<canvas id =\"exerPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:50%\"></canvas>"
        + "<div class=\"step-count\"><b>Steps : 7500/10000</b></div>"
        + "<div class=\"exercise-count\"><b>Exercise : 20/60 min</b></div>";
    } else if (id === 'workouts'){
        innerhtml = "<div class=\"subtitle\"><b>Workouts</b></div>"
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('workouts')\"><b>Week</b></button>";
    }
    innerhtml += "<div class=\"day-title\"><b>Today</b></div>"
    + "<button class=\"time-button\" style=\"right: 190px\"><b>Day</b></button>"
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>";
    document.getElementById(id).innerHTML = innerhtml;
    drawCharts();
}

function weekdayClick(day){
    document.getElementsByClassName('time-button').innerHTML = "";
    innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
    + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('summary')\"><b>Week</b></button>"
    + "<canvas id=\"stepsPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:-5%\"></canvas>"
    + "<canvas id =\"exerPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:50%\"></canvas>"
    + "<div class=\"step-count\"><b>Steps : 7500/10000</b></div>"
    + "<div class=\"exercise-count\"><b>Exercise : 20/60 min</b></div>";

    innerhtml += "<div class=\"day-title\"><b>" +day+ "</b></div>"
    + "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('summary')\"><b>Day</b></button>"
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>";
    document.getElementById('summary').innerHTML = innerhtml;
    drawCharts();
}

function weekClick(id){
    innerhtml = "";
    if(id === 'summary'){
        innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
        +"<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('summary')\"><b>Day</b></button>";
    } else if (id === 'workouts'){
        innerhtml = "<div class=\"subtitle\"><b>Workouts</b></div>"
        + "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('workouts')\"><b>Day</b></button>";
    }
    innerhtml += "<button class=\"time-button\" style=\"right: 110px; width: 62px\"><b>Week</b></button>"
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>"
    + "<button class=\"day-button\" style=\"left:30px\" onclick = \"weekdayClick('Sunday')\"><b>Su</b></button>"
    + "<button class=\"day-button\" style=\"left:110px\" onclick = \"weekdayClick('Monday')\"><b>M</b></button>"
    + "<button class=\"day-button\" style=\"left:190px\" onclick = \"weekdayClick('Tuesday')\"><b>T</b></button>"
    + "<button class=\"day-button\" style=\"left:270px\" onclick = \"weekdayClick('Wednesday')\"><b>W</b></button>"
    + "<button class=\"day-button\" style=\"left:350px\" onclick = \"weekdayClick('Thursday')\"><b>Th</b></button>"
    + "<button class=\"day-button\" style=\"left:430px\" onclick = \"weekdayClick('Friday')\"><b>F</b></button>"
    + "<button class=\"day-button\" style=\"left:510px\" onclick = \"weekdayClick('Saturday')\"><b>S</b></button>";

    document.getElementById(id).innerHTML = innerhtml;
}

function drawCharts(){
    var ctxstep = document.getElementById("stepsPie");
    var ctxex = document.getElementById("exerPie");

    var steps = [75, 25];
    var steplabel = ['', ''];

    var myChart = new Chart(ctxstep, {
    type: 'doughnut',
    data: {
        labels : steplabel,
        datasets: [
        {
            data: steps,
            backgroundColor : ['#FF455E', '#FCA7B2'],
            borderColor : ['#333333', '#333333'],
            borderWidth : 1
        },
        ]
    },
    options : {
        legend : {
        display : false
        }
    }
    });

    // exercise pie chart
    var mins = [33, 67];
    var myChart = new Chart(ctxex, {
    type: 'doughnut',
    data: {
        labels : steplabel,
        datasets: [
        {
            data: mins,
            backgroundColor : ['#1FC173', '#91C7AD'],
            borderColor : ['#333333', '#333333'],
            borderWidth : 1
        },
        ]
    },
    options : {
        legend : {
        display : false
        }
    }
    });
}