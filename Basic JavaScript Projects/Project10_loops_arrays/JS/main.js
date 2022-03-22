var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function count_To_Ten() { // while loop 
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function for_Loop() { // for loop
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

let text = "Hello Hunter!"; 
let length = text.length;
document.getElementById("Length").innerHTML = length;

function football_team() { // array
    var Football_Team = [];
    Football_Team[0] = "The Dallas Cowboys";
    Football_Team[1] = "The Cincinatti Bengals";
    Football_Team[2] = "The Houston Texans";
    Football_Team[3] = "The Tennessee Titans";
    document.getElementById("Team-array").innerHTML = "I chose  " +
            Football_Team[0] + ".";
}

function constant_function() { // using constants
    const Big_Mac = {type:"burger", bun:"seeded", quality:"peak"};
    Big_Mac.cost = "8$";
    Big_Mac.quality = "wonderful";
    document.getElementById("BigMac").innerHTML = "The cost of the " + Big_Mac.type + " was " + Big_Mac.cost;
}

let hunter = { 
    eye__color: "Green ",
    age: "25 ",
    height: "6'3 ",
    favorite_color: "light green.",
    description : function() {
        return "Hunter is " + this.age + "he is " + this.height + "and his favorite color is " 
        + this.favorite_color}
    }
document.getElementById("hunter_stats").innerHTML = hunter.description();