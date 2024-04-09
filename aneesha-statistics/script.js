document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
    // draw today's donut charts (summary and nutrition)
    drawCharts('', 'start');
    // open text tab first by default
    var item = document.getElementById('defaultOpen');
    //item.click();
});

// clicking the "Day" button
function dayClick(id){
    document.getElementById(id).innerHTML = "";
    innerhtml = "";
    // if "Day" button is clicked on the Summary module, display the day's donut chart 
    if(id === 'summary'){
        innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
        // add a "Week" button that functions specifically for the Summary module
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('summary')\"><b>Week</b></button>"
        + "<canvas id=\"stepsPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:-5%\"></canvas>"
        + "<canvas id =\"exerPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:50%\"></canvas>"
        + "<div class=\"step-count\"><b>Steps : 7500/10000</b></div>"
        + "<div class=\"exercise-count\"><b>Exercise : 50/60 min</b></div>";
    } else if (id === 'workouts'){ //if Day button clicked on Workouts module, display the day's workouts
        innerhtml = "<div class=\"subtitle\"><b>Workouts</b></div>"
        // add a "Week" button that functions specifically for the Workouts module
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('workouts')\"><b>Week</b></button>"
        + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
        + "You completed a 1.8 mile run</div>" 
        + "<img src=\"run.png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
        + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
        + "You completed a 1.0 mile swim</div>" 
        + "<img src=\"swim.png\" height=\"50\" style=\"position:absolute;top:170px;left:20px;\">";
    }
    // summary and workouts both need a "Today" subtitle as well as the Day and Month button
    // pressing day button multiple times in a row does nothing
    innerhtml += "<div class=\"day-title\"><b>Today</b></div>"
    + "<button class=\"time-button\" style=\"right: 190px\"><b>Day</b></button>"
    // TODO add Month button functionality
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>";
    // set innerhtml for summary or workouts section
    document.getElementById(id).innerHTML = innerhtml;
    
    // run the function that creates donut charts for summary module
    if (id === 'summary'){
        drawCharts('today', 'summary');  
    }
}

function weekdayClick(id, day){
    // hardcoded weekly workouts data
    weekWorkouts = [
        ['Sunday', 'yoga', '40 minute'],
        ['Monday', 'run', 'swim', '1.2 mile', '0.5 mile'],
        ['Tuesday', 'run', 'yoga', '2.0 mile', '30 minute'],
        ['Wednesday', 'run', 'stairmaster', 'elliptical', 'yoga', '1.5 mile', '30 minute', '30 minute', '15 minute'],
        ['Thursday', 'walk', '3.75 mile'],
        ['Friday', 'walk', '1.0 mile'],
        ['Saturday', 'run', 'swim', '1.8 mile', '1.0 mile']
    ];

    if(id === 'summary'){
        document.getElementsByClassName('time-button').innerHTML = "";
        innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
        // pressing "Week" after pressing on a day of week button takes you back to day of week button page
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('summary')\"><b>Week</b></button>"
        // add HTML canvases for the donut charts for steps/exercise for each week day
        + "<canvas id=\"stepsPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:-5%\"></canvas>"
        + "<canvas id =\"exerPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:50%\"></canvas>";
        
        switch(day){
            // add different labels for each day of week step + exercise count
            case 'Sunday':
                innerhtml += 
                "<div class=\"step-count\"><b>Steps : 1500/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 40/60 min</b></div>";
                break;
            case 'Monday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 9000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 45/60 min</b></div>";
                break;
            case 'Tuesday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 10000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 60/60 min</b></div>";
                break;
            case 'Wednesday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 10000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 60/60 min</b></div>";
                break;
            case 'Thursday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 8500/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 60/60 min</b></div>";
                break;
            case 'Friday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 2000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 15/60 min</b></div>";
                break;
            case 'Saturday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 7500/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 50/60 min</b></div>";
                break;
            default: 

        }
        // add subtitle that says what day of week you are looking at
        innerhtml += "<div class=\"day-title\"><b>" + day + "</b></div>"
        + "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('summary')\"><b>Day</b></button>"
        // TODO add month button functionality 
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>";

        document.getElementById(id).innerHTML = innerhtml;
        // run drawCharts to create donut based on day of week
        drawCharts(day, 'summary');
    } else if (id === 'workouts') {
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).innerHTML = 
        "<div class=\"subtitle\"><b>Workouts</b></div> <div class=\"day-title\"><b>" + day + "</b></div>"
        + "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('workouts')\"><b>Day</b></button>"
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('workouts')\"><b>Week</b></button>"
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>";
       
        switch(day){
            // add text + icons for each day of week's workouts
            case 'Sunday':
                document.getElementById(id).innerHTML +=
                " <div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[0][2] + " " + weekWorkouts[0][1] + " session</div>" 
                + "<img src=\"" + weekWorkouts[0][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">";
                break;
            case 'Monday': 
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[1][3] + " " + weekWorkouts[1][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[1][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
                + "You completed a " + weekWorkouts[1][4] + " " + weekWorkouts[1][2] + "</div>" 
                + "<img src=\"" + weekWorkouts[1][2] + ".png\" height=\"50\" style=\"position: absolute;top:170px;left:20px;\">";
                break;
            case 'Tuesday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[2][3] + " " + weekWorkouts[2][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[2][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
                + "You completed a " + weekWorkouts[2][4] + " " + weekWorkouts[2][2] + " session</div>" 
                + "<img src=\"" + weekWorkouts[2][2] + ".png\" height=\"50\" style=\"position: absolute;top:170px;left:20px;\">";
                break;
            case 'Wednesday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[3][5] + " " + weekWorkouts[3][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[3][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
                + "You completed a " + weekWorkouts[3][6] + " " + weekWorkouts[3][2] + " session</div>" 
                + "<img src=\"" + weekWorkouts[3][2] + ".png\" height=\"50\" style=\"position: absolute;top:170px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:250px;left:80px\">"
                + "You completed a " + weekWorkouts[3][7] + " " + weekWorkouts[3][3] + " session</div>" 
                + "<img src=\"" + weekWorkouts[3][3] + ".png\" height=\"50\" style=\"position: absolute;top:240px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:320px;left:80px\">"
                + "You completed a " + weekWorkouts[3][8] + " " + weekWorkouts[3][4] + " session</div>" 
                + "<img src=\"" + weekWorkouts[3][4] + ".png\" height=\"50\" style=\"position: absolute;top:310px;left:20px;\">";
                break;
            case 'Thursday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[4][2] + " " + weekWorkouts[4][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[4][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">";
                break;
            case 'Friday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[5][2] + " " + weekWorkouts[5][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[5][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">";
                break;
            case 'Saturday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[6][3] + " " + weekWorkouts[6][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[6][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
                + "You completed a " + weekWorkouts[6][4] + " " + weekWorkouts[6][2] + "</div>" 
                + "<img src=\"" + weekWorkouts[6][2] + ".png\" height=\"50\" style=\"position:absolute;top:170px;left:20px;\">";
                break;
        } 
    }
}

function weekClick(id){
    innerhtml = "";
    // add respective "Day" buttons for summary and workouts sections
    if(id === 'summary'){
        innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
        +"<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('summary')\"><b>Day</b></button>";
    } else if (id === 'workouts'){
        innerhtml = "<div class=\"subtitle\"><b>Workouts</b></div>"
        + "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('workouts')\"><b>Day</b></button>";
    }

    // add day of week buttons that have different functionalities based on the module they are in
    // if in summary, shows donut charts, if in workouts, shows workouts done that day
    innerhtml += "<button class=\"time-button\" style=\"right: 110px; width: 62px\"><b>Week</b></button>"
    + "<button class=\"time-button\" style=\"right: 20px; width: 72px\"><b>Month</b></button>"
    + "<button class=\"day-button\" style=\"left:30px\" onclick = \"weekdayClick('" + id + "','Sunday')\"><b>Su</b></button>"
    + "<button class=\"day-button\" style=\"left:110px\" onclick = \"weekdayClick('" + id + "','Monday')\"><b>M</b></button>"
    + "<button class=\"day-button\" style=\"left:190px\" onclick = \"weekdayClick('" + id + "','Tuesday')\"><b>T</b></button>"
    + "<button class=\"day-button\" style=\"left:270px\" onclick = \"weekdayClick('" + id + "','Wednesday')\"><b>W</b></button>"
    + "<button class=\"day-button\" style=\"left:350px\" onclick = \"weekdayClick('" + id + "','Thursday')\"><b>Th</b></button>"
    + "<button class=\"day-button\" style=\"left:430px\" onclick = \"weekdayClick('" + id + "','Friday')\"><b>F</b></button>"
    + "<button class=\"day-button\" style=\"left:510px\" onclick = \"weekdayClick('" + id + "','Saturday')\"><b>S</b></button>";

    document.getElementById(id).innerHTML = innerhtml;
}

function macroView(){
    // if calories consumed chart is clicked, show nutrition breakdown with icons
    document.getElementById('nutrition').innerHTML = 
    "<div class=\"subtitle\"><b>Nutrition</b></div> <div class=\"day-title\"><b>Today</b></div>"
    + "<button class=\"time-button\" onclick = \"back()\" style=\"right: 20px; width: 72px\"><b>Back</b></button>"
    + "<img src = \"./protein.png\" height = 80 style = \"position:absolute;top:120px;left:80px\">"
    + "<img src = \"./carb.png\" height = 80 style = \"position:absolute;top:250px;left:75px\">"
    + "<img src = \"./fat.png\" height = 80 style = \"position:absolute;top:380px;left:75px\">"
    + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:145px;left:200px\">"
    + "<b>15g protein</b></div>"
    + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:275px;left:200px\">"
    + "<b>20g carbs</b></div>"
    + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:405px;left:200px\">"
    + "<b>8g fats</b></div>";
}

//for the back button in the nutrition section
function back(){
    // back button takes user back to donut chart view 
    document.getElementById('nutrition').innerHTML = 
    "<div class=\"subtitle\"><b>Nutrition</b></div> <div class=\"day-title\"><b>Today</b></div>"
    + "<canvas id=\"consumePie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:-5%\" onclick = \"macroView()\"></canvas>"
    + "<canvas id =\"burnPie\" style=\"width:100%;max-width:300px;position:absolute;top:30%;left:50%\"></canvas>"
    + "<div class=\"step-count\"><b>Consumed : 1110/2000 cals</b></div> <div class=\"exercise-count\"><b>Burned : 210/300 cals</b></div>";

    drawCharts('today','nutrition');
}

// uses chart.js to draw the donut charts for the different sections
function drawCharts(day, id){
    var ctxstep = document.getElementById("stepsPie");
    var ctxex = document.getElementById("exerPie");
    var ctxconsume = document.getElementById("consumePie");
    var ctxburn = document.getElementById("burnPie");

    var steps = [];
    var mins = [];
    var label = ['', ''];
    var consumed = [55, 65];
    var burned = [70, 30];

    switch(day){
        case 'Sunday':
            steps = [15, 85];
            mins = [67, 33];
            break;
        case 'Monday': 
            steps = [90, 10];
            mins = [75,25];
            break;67
        case 'Tuesday': 
            steps = [100, 0];
            mins = [100, 0];
            break;
        case 'Wednesday':
            steps = [100, 0];
            mins = [100, 0];
            break;
        case 'Thursday':
            steps = [85, 15];
            mins = [100, 0];
            break;
        case 'Friday':
            steps = [20, 80];
            mins = [25, 75];
            break;
        case 'Saturday':
            steps = [75, 25];
            mins = [83, 17];
            break;
        default:
            steps = [75,25];
            mins = [83, 17]
    }

    // steps counter ring
    if(id === 'summary' || id === 'start'){
        var myChart = new Chart(ctxstep, {
        type: 'doughnut',
        data: {
            labels : label,
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
        var myChart = new Chart(ctxex, {
        type: 'doughnut',
        data: {
            labels : label,
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
    
    if(id === 'nutrition' || id === 'start'){
        var myChart = new Chart(ctxconsume, {
            type: 'doughnut',
            data: {
                labels : label,
                datasets: [
                {
                    data: consumed,
                    backgroundColor : ['#08A6DF', '#9CDFF7'],
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
    
        var myChart = new Chart(ctxburn, {
            type: 'doughnut',
            data: {
                labels : label,
                datasets: [
                {
                    data: burned,
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
    }
}