//updates the current date for the calendar in the element below
var currDay = document.getElementById("currentDay");
currDay.innerHTML = moment().format("LL");

//creates on click event for the save button element, set items to local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault(); // used so page doesnt refresh, saves events to calendar
  var time = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(time, value);
});

//declare function that establishes current time and compares in a loop with a conditional statement that
//adjusts the class(css) setting for each time-block
function hourChange() {
  var timeCurrent = moment().hours();
  $(".time-block").each(function () {
    console.log(timeCurrent); // 12 hour time or 24 hour

    var compareHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(compareHour); // 12 hour or 24 hour
    if (compareHour < timeCurrent) {
      $(this).addClass("past");
    } else if (compareHour === timeCurrent) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else if (compareHour > timeCurrent) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}
hourChange(); // calls previous function
var timeChecker = setInterval(hourChange, 15000);

//gets items from local storage by their class (description) for each time block
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
