var RS2RELEASE = 2002;
var RS3RELEASE = 2013;

function game() {
    var OSRSRELEASE = 2013;
    document.getElementById("Game").innerHTML = "OSRS Release date = " + OSRSRELEASE;
}

function debugg() {
    debugg = document.getElementById("RS3RELEASE").value;
    document.getElementById("err1").innerHTML = RS3RELEASE + " was the year RS3 Released";
}

document.write();
console.log(debugg);

function get_Date() { //time function
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Oh my, Have a great night!";
    }
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "Have a great rest of your day!";
    }
}

function Team() { //function on choosing a team
    Team = document.getElementById("Team").value;
    if (Team == "Texas") {
        Response = "You are the best!";
    }
    else if (Team == "Oklahoma") {
        Response = "Well.. that's basically a sin."
    }
    else {
        Response = "Wrong.. Just wrong..";
    }
    document.getElementById("Team1").innerHTML = Response;
}

function Time_function() {// another time function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}