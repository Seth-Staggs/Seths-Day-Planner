//define variable used to display time//
var date = moment().format("MMM Do YY");

// append date//
$("#currentDay").append(date);


//background Updater//

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
    var currentTime = moment().format('H');
    for (var i = 0; i < timeOfday.length; i++) {

        if (parseInt(timeOfday[i]) > currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #77dd77");
        }
        else if (parseInt(timeOfday[i]) < currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #d3d3d3");
        }
        else if (parseInt(timeOfday[i]) == currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #ff6961");
        }
    }
}

//onclick event to save user input to local storage//
$(".saveBtn").on("click", function () {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $(this).parent().children()[1].value;
    console.log(timeOfday);
    console.log($(this).parent().children()[1].value);
    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

//Getting individual childern and setting to parent//
$("#9am").children("textarea").val(localStorage.getItem("9am"));

$("#10am").children("textarea").val(localStorage.getItem("10am"));

$("#11am").children("textarea").val(localStorage.getItem("11am"));

$("#12pm").children("textarea").val(localStorage.getItem("12pm"));

$("#1pm").children("textarea").val(localStorage.getItem("1pm"));

$("#2pm").children("textarea").val(localStorage.getItem("2pm"));

$("#3pm").children("textarea").val(localStorage.getItem("3pm"));

$("#4pm").children("textarea").val(localStorage.getItem("4pm"));

$("#5pm").children("textarea").val(localStorage.getItem("5pm"));
