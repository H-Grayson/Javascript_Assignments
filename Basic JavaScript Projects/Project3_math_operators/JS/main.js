function addition_Function() {
    var addition = 22 + 14;
    document.getElementById("Math").innerHTML = "22 + 14 = " + addition;
}

function subtraction_Function() {
    var subtraction = 29 - 16;
    document.getElementById("Math1").innerHTML = "29 - 16 = " + subtraction;
}

function multiplication() {
    var simple_Math = 8 * 45;
    document.getElementById("Math2").innerHTML = "8 x 45 = " + simple_Math;
}

function division() {
    var simple_Math1 = 45 / 8;
    document.getElementById("Math3").innerHTML = "45 / 8 = " + simple_Math1;
}

function complex_problem() {
    var simple_Math2 = 8 * 5 + 3 * (15/12);
    document.getElementById("Math4").innerHTML = "8 multiplied by 5, plus 3, multiplied by, 15 divided by 12 is equal to  " + simple_Math2;
}

function modulus_Operator() {
    var simple_Math3 = 29 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 29 by 6 you have a remainder of: " + simple_Math3;
}

function negation_Operator() {
    var x = 25;
    document.getElementById("Math6").innerHTML = -x;
}

window.alert(Math.random() * 100);