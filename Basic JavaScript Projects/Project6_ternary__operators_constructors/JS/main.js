function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Ride_Function1() {
    var Height1, Can_ride; //ternary options 
    Height1 = document.getElementById("Height1").value;
    Can_ride = (Height1 < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride1").innerHTML = Can_ride + " to ride.";
}

function Voting_Eligibility() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <= 18) ? "You are too young":"You are eligible";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function meal(Appetizer, Soup, Main_Course, Dessert) { 
    this.meal_Appetizer = Appetizer;
    this.meal_Soup = Soup;
    this.meal_Main_Course = Main_Course;
    this.meal_Dessert = Dessert;
}
var Hunter = new meal("Calamari", "Wonton Soup", "Sushi", "Ice Cream"); // assigning values
var Eva = new meal("Jalapeno Poppers", "Minestrone", "Spaghetti", "Tiramasu");
var Jerome = new meal("Rolls", "Chicken Noodle", "Chicken Strips", "Ice Cream");

function mealTime() {   // used a constructor function to display what Eva ordered
    document.getElementById("Meal_Choice").innerHTML =
    "Eva would like " + Eva.meal_Appetizer + " as an appetizer, " + Eva.meal_Soup + " for soup, as a main course Eva will have the "  
    + Eva.meal_Main_Course + " and for dessert " + Eva.meal_Dessert + ". The total will be...";
    }

function cost() {       // adding tax to a static amount
    document.getElementById("Cost").innerHTML = add_tax();
    function add_tax() {
        var total = 25.99;
        function taxing() {total *= 1.08;}
        taxing();
        return total;
    }
}

