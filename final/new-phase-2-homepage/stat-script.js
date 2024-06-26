document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
    // open text tab first by default
    var item = document.getElementById('defaultOpen');
    //item.click();
});

function gotoHome() {
  window.location.replace("index.html?data="+window.location.href.split('?data=')[1]);
}

// clicking the "Day" button
function dayClick(id){
    document.getElementById(id).innerHTML = "";
    innerhtml = "";
    // if "Day" button is clicked on the Summary module, display the day's progress chart 
    if(id === 'summary'){
        innerhtml = "<div class=\"subtitle\"><b>Summary</b></div>"
        // add a "Week" button that functions specifically for the Summary module
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('summary')\"><b>Week</b></button>"
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\" onclick = \"monthClick('summary')\"><b>Month</b></button>"
        + "<div class=\"progcontainer\" style=\"background-color: #B5E4F5;\">"
        + "<div class=\"prog\" id=\"progbar\" style=\"background-color:#08A6DF;width: 75%\"></div></div>"
        + "<div class=\"progcontainer\" style=\"background-color: #91C7AD;top:190px;\">"
        + "<div class=\"prog\" id=\"progbar\" style=\"background-color:#1FC173;width: 83%\"></div></div>"
        + "<div class=\"step-count\"><b>Steps : 7500/10000</b></div>"
        + "<div class=\"exercise-count\"><b>Exercise : 50/60 min</b></div>";
    } else if (id === 'workouts'){ //if Day button clicked on Workouts module, display the day's workouts
        innerhtml = "<div class=\"subtitle\"><b>Workouts</b></div>"
        // add a "Week" button that functions specifically for the Workouts module
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('workouts')\"><b>Week</b></button>"
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\" onclick = \"monthClick('workouts')\"><b>Month</b></button>"
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
    + "<button class=\"time-button\" style=\"right: 190px\"><b>Day</b></button>";
    // TODO add Month button functionality
    // set innerhtml for summary or workouts section
    document.getElementById(id).innerHTML = innerhtml;
    
    // run the function that creates progress charts for summary module
    
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
        + "<div class=\"progcontainer\" id=\"step\" style=\"background-color: #B5E4F5;\"></div>"
        + " <div class=\"progcontainer\" id = \"exercise\" style=\"background-color: #91C7AD;top:190px;\"></div>";
        
        switch(day){
            // add different labels for each day of week step + exercise count
            case '7': case '14': case '21': case '28':
            case 'Sunday':
                innerhtml += 
                "<div class=\"step-count\"><b>Steps : 1500/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 40/60 min</b></div>";
                break;
            case '1': case '8': case '15': case '22': case '29':
            case 'Monday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 9000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 45/60 min</b></div>";
                break;
            case '2': case '9': case '16': case '23': case '30':
            case 'Tuesday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 10000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 60/60 min</b></div>";
                break;
            case '3': case '10': case '17': case '24':
            case 'Wednesday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 10000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 60/60 min</b></div>";
                break;
            case '4': case '11': case '18': case '25':
            case 'Thursday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 8500/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 60/60 min</b></div>";
                break;
            case '5': case '12': case '19': case '26':
            case 'Friday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 2000/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 15/60 min</b></div>";
                break;
            case '6': case '13': case '20': case '27':
            case 'Saturday':
                innerhtml += "<div class=\"step-count\"><b>Steps : 7500/10000</b></div> <div class=\"exercise-count\"><b>Exercise : 50/60 min</b></div>";
                break;
            default: 
        }

        if(Number(day)){
            innerhtml += "<div class=\"day-title\"><b>April " + day + "</b></div>"
        } else{
            innerhtml += "<div class=\"day-title\"><b>" + day + "</b></div>"
        }
        // add subtitle that says what day of week you are looking at
        innerhtml += "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('summary')\"><b>Day</b></button>"
        // TODO add month button functionality 
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\" onclick=\"monthClick('summary')\"><b>Month</b></button>";

        document.getElementById(id).innerHTML = innerhtml;
        // run drawCharts to create progress chart based on day of week
        drawCharts(day, 'summary');
    } else if (id === 'workouts') { // weekday buttons for workouts section
        document.getElementById(id).innerHTML = "<div class=\"subtitle\"><b>Workouts</b></div>";

        if(Number(day)){
            document.getElementById(id).innerHTML += "<div class=\"day-title\"><b>April " + day + "</b></div>"
        } else{
            document.getElementById(id).innerHTML += "<div class=\"day-title\"><b>" + day + "</b></div>"
        }

        document.getElementById(id).innerHTML += 
        "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('workouts')\"><b>Day</b></button>"
        + "<button class=\"time-button\" style=\"right: 110px; width: 62px\" onclick=\"weekClick('workouts')\"><b>Week</b></button>"
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\" onclick=\"monthClick('workouts')\"><b>Month</b></button>";
       
        switch(day){
            // add text + icons for each day of week's workouts
            case '7': case '14': case '21': case '28':
            case 'Sunday':
                document.getElementById(id).innerHTML +=
                " <div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[0][2] + " " + weekWorkouts[0][1] + " session</div>" 
                + "<img src=\"" + weekWorkouts[0][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">";
                break;
            case '1': case '8': case '15': case '22': case '29':
            case 'Monday': 
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[1][3] + " " + weekWorkouts[1][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[1][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
                + "You completed a " + weekWorkouts[1][4] + " " + weekWorkouts[1][2] + "</div>" 
                + "<img src=\"" + weekWorkouts[1][2] + ".png\" height=\"50\" style=\"position: absolute;top:170px;left:20px;\">";
                break;
            case '2': case '9': case '16': case '23': case '30':
            case 'Tuesday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[2][3] + " " + weekWorkouts[2][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[2][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">"
                + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:180px;left:80px\">"
                + "You completed a " + weekWorkouts[2][4] + " " + weekWorkouts[2][2] + " session</div>" 
                + "<img src=\"" + weekWorkouts[2][2] + ".png\" height=\"50\" style=\"position: absolute;top:170px;left:20px;\">";
                break;
            case '3': case '10': case '17': case '24':
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
            case '4': case '11': case '18': case '25':
            case 'Thursday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[4][2] + " " + weekWorkouts[4][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[4][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">";
                break;
            case '5': case '12': case '19': case '26':
            case 'Friday':
                document.getElementById(id).innerHTML +=
                "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:110px;left:80px\">"
                + "You completed a " + weekWorkouts[5][2] + " " + weekWorkouts[5][1] + "</div>" 
                + "<img src=\"" + weekWorkouts[5][1] + ".png\" height=\"50\" style=\"position: absolute;top:100px;left:20px;\">";
                break;
            case '6': case '13': case '20': case '27':
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
        +"<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('summary')\"><b>Day</b></button>"
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\" onclick=\"monthClick('summary')\"><b>Month</b></button>";
    } else if (id === 'workouts'){
        innerhtml = "<div class=\"subtitle\"><b>Workouts</b></div>"
        + "<button class=\"time-button\" style=\"right: 190px\" onclick=\"dayClick('workouts')\"><b>Day</b></button>"
        + "<button class=\"time-button\" style=\"right: 20px; width: 72px\" onclick=\"monthClick('workouts')\"><b>Month</b></button>";
    }

    // add day of week buttons that have different functionalities based on the module they are in
    // if in summary, shows progress charts, if in workouts, shows workouts done that day
    innerhtml += "<button class=\"time-button\" style=\"right: 110px; width: 62px\"><b>Week</b></button>"
    + "<button class=\"day-button\" style=\"left:30px\" onclick = \"weekdayClick('" + id + "','Sunday')\"><b>Su</b></button>"
    + "<button class=\"day-button\" style=\"left:110px\" onclick = \"weekdayClick('" + id + "','Monday')\"><b>M</b></button>"
    + "<button class=\"day-button\" style=\"left:190px\" onclick = \"weekdayClick('" + id + "','Tuesday')\"><b>T</b></button>"
    + "<button class=\"day-button\" style=\"left:270px\" onclick = \"weekdayClick('" + id + "','Wednesday')\"><b>W</b></button>"
    + "<button class=\"day-button\" style=\"left:350px\" onclick = \"weekdayClick('" + id + "','Thursday')\"><b>Th</b></button>"
    + "<button class=\"day-button\" style=\"left:430px\" onclick = \"weekdayClick('" + id + "','Friday')\"><b>F</b></button>"
    + "<button class=\"day-button\" style=\"left:510px\" onclick = \"weekdayClick('" + id + "','Saturday')\"><b>S</b></button>";

    document.getElementById(id).innerHTML = innerhtml;
}

function monthClick(id){
    document.getElementById(id).innerHTML = "";
    var innerhtml = "";
    var day = 7;
    var left = 20;
    var top = 220;

    innerhtml += "<div class=subtitle style = \"left:270px\"><b>April</b></div>"
    + "<div class=day-title style=\"top:70px;left:30px\"><b>Sun</b></div>"
    + "<div class=day-title style=\"top:70px;left:110px\"><b>Mon</b></div>"
    + "<div class=day-title style=\"top:70px;left:190px\"><b>Tue</b></div>"
    + "<div class=day-title style=\"top:70px;left:270px\"><b>Wed</b></div>"
    + "<div class=day-title style=\"top:70px;left:350px\"><b>Thu</b></div>"
    + "<div class=day-title style=\"top:70px;left:430px\"><b>Fri</b></div>"
    + "<div class=day-title style=\"top:70px;left:510px\"><b>Sat</b></div>"
    // add buttons for first 6 days of april
    + "<button class=\"day-button\" style=\"top:120px;left:100px\" id=\"1\"><b>1</b></button>"
    + "<button class=\"day-button\" style=\"top:120px;left:180px\" id=\"2\"><b>2</b></button>"
    + "<button class=\"day-button\" style=\"top:120px;left:260px\" id=\"3\"><b>3</b></button>"
    + "<button class=\"day-button\" style=\"top:120px;left:340px\" id=\"4\"><b>4</b></button>"
    + "<button class=\"day-button\" style=\"top:120px;left:420px\" id=\"5\"><b>5</b></button>"
    + "<button class=\"day-button\" style=\"top:120px;left:500px\" id=\"6\"><b>6</b></button>";

    // add three weeks worth of buttons for April
    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 7; j++){
            innerhtml += "<button class=\"day-button\" style=\"top:" + top.toString() + "px;left:"
            + left.toString() + "px\" id=\"" +(day).toString()+"\"><b>"+ day.toString() +"</b></button>";
            left += 80;
            day++;
        }
        top += 100;
        left = 20;
    }

    // add last three days of April
    innerhtml += "<button class=\"day-button\" style=\"top:520px;left:20px\"id=\"28\"><b>28</b></button>"
    + "<button class=\"day-button\" style=\"top:520px;left:100px\" id=\"29\"><b>29</b></button>"
    + "<button class=\"day-button\" style=\"top:520px;left:180px\" id=\"30\"><b>30</b></button>";

    document.getElementById(id).innerHTML = innerhtml;
    calendarClick(id);
}

function calendarClick(id){
    var weekday = 0;
    var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    for(let i = 1; i < 31; i++){
        //console.log(days[weekday]);
        document.getElementById(i.toString()).onclick = function() {weekdayClick(id, i.toString())};
    }
    
}

function macroView(){
    // if calories consumed chart is clicked, show nutrition breakdown with icons
    document.getElementById('nutrition').innerHTML = 
    "<div class=\"subtitle\"><b>Nutrition</b></div> <div class=\"day-title\"><b>Today</b></div>"
    + "<button class=\"time-button\" onclick = \"back('nutrition')\" style=\"right: 20px; width: 72px\"><b>Back</b></button>"
    + "<img src = \"./protein.png\" height = 80 style = \"position:absolute;top:120px;left:80px\">"
    + "<img src = \"./carb.png\" height = 80 style = \"position:absolute;top:250px;left:75px\">"
    + "<img src = \"./fat.png\" height = 80 style = \"position:absolute;top:380px;left:75px\">"
    + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:145px;left:200px\">"
    + "<b>100g protein</b></div>"
    + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:275px;left:200px\">"
    + "<b>210g carbs</b></div>"
    + "<div style=\"color:white;font-family:arial;font-size:25px;text-align:left;position:absolute;top:405px;left:200px\">"
    + "<b>60g fats</b></div>";
}

//for the back button in the nutrition section
function back(id){
    // back button takes user back to progress chart view 
    if(id === 'nutrition'){
        document.getElementById(id).innerHTML = 
        "<div class=\"subtitle\"><b>Nutrition</b></div> <div class=\"day-title\"><b>Today</b></div>"
        + "<div class=\"progcontainer\" id=\"consumed\" style=\"background-color:#FFE4B3;\" onclick = \"macroView()\">"
        + "<div class=\"prog\" id=\"progbar\" style=\"background-color:#FFB01F;width: 71%\"></div></div>"
        + "<div class=\"progcontainer\" id = \"burned\" style=\"background-color:#FC8696;top:190px;\">"
        + "<div class=\"prog\" id=\"progbar\" style=\"background-color:#FF455E;width: 70%\"></div></div>" 
        + "<div class=\"step-count\"><b>Consumed : 2000/2800 cals</b></div> <div class=\"exercise-count\"><b>Burned : 210/300 cals</b></div>";
    } else if(id === 'trend'){
        document.getElementById(id).innerHTML = "<div class=\"subtitle\"><b>Trends</b></div>"
        + "<div class=\"trend-module\" id= \"cals\" style = \"top:90px;left:30px;font-size:20px\" onclick = \"trendClick('cals')\">"
        + "<b>Calories Burned</b><br><br><b style=\"font-size:17px\">300 cal/day</b></div>"
        + "<div class=\"trend-module\" id = \"mins\" style = \"top:90px;right:30px;font-size:20px\" onclick = \"trendClick('mins')\">"
        + "<b>Exercise Minutes</b><br><br><b style=\"font-size:17px\">70 min/day</b></div>"
        + "<div class=\"trend-module\" id = \"dist\" style = \"top:230px;left:30px;font-size:20px\" onclick = \"trendClick('dist')\">"
        + "<b>Walking Distance</b><br><br><b style=\"font-size:17px\" >1.5 miles/day</b></div>"
        + "<div class=\"trend-module\" id = \"bpm\" style = \"top:230px;right:30px;font-size:20px\" onclick = \"trendClick('bpm')\">"
        + " <b>Heart Rate</b><br><br><b style=\"font-size:17px\">75 bpm</b></div>";
    }
}

function drawCharts(day){
    var steps;
    var mins; 

    // change percentage for steps and exercise mins based on what day it is
    switch(day){
        case '7': case '14': case '21': case '28':
        case 'Sunday':
            steps = 85;
            mins = 67;
            break;
        case '1': case '8': case '15': case '22': case '29':
        case 'Monday': 
            steps = 90;
            mins = 75;
            break;
        case '2': case '9': case '16': case '23': case '30':
        case 'Tuesday': 
            steps = 100;
            mins = 100;
            break;
        case '3': case '10': case '17': case '24':
        case 'Wednesday':
            steps = 100;
            mins = 100;
            break;
        case '4': case '11': case '18': case '25':
        case 'Thursday':
            steps = 85;
            mins = 100;
            break;
        case '5': case '12': case '19': case '26':
        case 'Friday':
            steps = 20;
            mins = 25;
            break;
        case '6': case '13': case '20': case '27':
        case 'Saturday':
            steps = 75;
            mins = 83;
            break;
        default:
            steps = 75;
            mins = 83;
    }

    // make the progress bars for the summary sections
    document.getElementById('step').innerHTML =
    "<div class=\"prog\" id=\"progbar\" style=\"background-color:#08A6DF;width:" + steps.toString()+ "%\"></div>";
    document.getElementById('exercise').innerHTML =
    "<div class=\"prog\" id=\"progbar\" style=\"background-color:#1FC173;width:" + mins.toString()+ "%\"></div>";
}

function trendClick(trend){
    document.getElementById('trend').innerHTML = 
    "<button class=\"time-button\" onclick = \"back('trend')\" style=\"right: 20px; width: 72px\"><b>Back</b></button>";
    if(trend === 'bpm'){
        document.getElementById('trend').innerHTML +=
        "<img src= \"bpm-chart.png\" style=\"position:absolute;top:20px;left:60px\">"
        + "<div class = \"subtitle\" style = \"top:500px;left:15px\"><b>Your heart rate is down 5 bpm since last month</b></div>";
    } else if(trend === 'dist'){
        document.getElementById('trend').innerHTML +=
        "<img src= \"dist-chart.png\" style=\"position:absolute;top:20px;left:60px\">"
        + "<div class = \"subtitle\" style = \"top:500px;left:15px;font-size:28px\"><b>Your total walking distance is up by 0.5 miles since last month</b></div>";
    } else if(trend === 'mins'){
        document.getElementById('trend').innerHTML +=
        "<img src= \"exer-chart.png\" style=\"position:absolute;top:20px;left:60px\">"
        + "<div class = \"subtitle\" style = \"top:500px;left:30px;font-size:28px\"><b>Your total exercise minutes are up by 20 since last month</b></div>";
    } else if(trend === 'cals'){
        document.getElementById('trend').innerHTML +=
        "<img src= \"cals-chart.png\" style=\"position:absolute;top:20px;left:60px\">"
        + "<div class = \"subtitle\" style = \"top:500px;left:30px;font-size:28px\"><b>Your total calories burned is down by 50 since last month</b></div>";
    }
}