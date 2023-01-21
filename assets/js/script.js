"strict code";

//---------------------------
//Work Day Scheduler TODO/Psuedocode
//---------------------------
/*

-Title that displays current day, date and month at the top of the planner:
  -Select "currentDay" jquery $("#currentDay") assign to currentDay
  -using moment.js, render current date (dddd,Do,MMMM,YYYY), asign to todaysDate
  -render currentTime, asign to currentTime (h:mm:ss A)
  -setInterval to update time
  -use moment.js to asign currentHour
  

-Time blocks for standard 9-5 work day, color coded depending on current hour with save button:
  -Assign timeBlockContainer to $(".container")
  -Select contrainer class and render 9 divs with class ".time-block", dynamically.
    -Create workHour array (9 - 5, am, pm)
    -FOR every workHour
    -  Render and append time-block row
  -Create logic to change appearance of scheduler depending on current time
    -IF workHour is LESS THAN currentHour, change to ".past" style
    -ELSE IF workHour is MORE THAN currentHour, change to ".future" style
    -ELSE workHour is EQUAL to currentHour, change style to ".present"

-Ability to input tasks inside rows:
  -Event listener on taskBox submit
  -Create form for each time-block with name/id "taskBox"

-Tasks are savable and persist even after refresh
  - Event listener on saveBtn click
  - Select form element by its `name` attribute and get its value:
      - LET textInput = Text Input $('input[name="taskInput"]').val();
    - set taskObject into Local storage:
    - SAVE textInput into local storage
    - Stringify and parse back onto current row
  
*/
//---------------------------

let timeBlockContainer = $(".container");
let timeP = $("<p>");

//Header Date/Time
function renderDate() {
  let currentDay = $("#currentDay");
  let todaysDate = moment().format("dddd Do MMMM YYYY,");
  currentDay.text(todaysDate);
}

function drawClock() {
  let headerContainer = $(".jumbotron");
  timeP.addClass("h3");
  headerContainer.append(timeP);
}

function renderTime() {
  drawClock();
  let currentTime = moment().format("h:mm:ss A");
  timeP.text(currentTime);
}

renderDate();
renderTime();
setInterval(renderTime, 1000);
