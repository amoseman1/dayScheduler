//updates the current date for the calendar
var currDay = document.getElementById("currentDay");
currDay.innerHTML = moment().format("LL");

//creates on click event for the save button element, set items to local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault(); // used so page doesnt refresh, why not working?
  var time = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(value, time);
});

//declare function that establishes current time and compares in a loop with a conditional statement that
//adjusts the class(css) setting for each time-block
function hourChange() {
  var timeCurrent = moment().hours();
  $(".time-block").each(function () {
    var compareHour = parseInt($(this).attr("id").split("-")[1]);
    if (compareHour < timeCurrent) {
      $(this).addClass("past");
    } else if (compareHour === timeCurrent) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      // $(this).removeClass("present"); // only one block of future is green, why not all?
      // $(this).removeClass("past");
    }
  });
}
hourChange(); // calls previous function
var timeChecker = setInterval(hourChange, 15000);

//getting items from local storage for each time block
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
