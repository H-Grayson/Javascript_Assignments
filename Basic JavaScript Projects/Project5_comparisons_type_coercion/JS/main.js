document.write((typeof "Word") + "<br>")

document.write(("42" + 0) + "<br>")

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0
}

function my_Function1() {
    document.getElementById("Test1").innerHTML = 19
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = 21
}

function infinity_positive() {
    document.getElementById("ipe").innerHTML = 3E310
}

function infinity_negative() {
    document.getElementById("ine").innerHTML = -3E310
}

document.write((15 > 7) + "<br>");

document.write((25 < 5) + "<br>");

console.log((6+6 >= 13) + "<br>");

document.write((15 + 9 == 24) + "<br>");

document.write((15 + 9 == 22) + "<br>");


A = 5;
B = 8;
C = 8;
D = 10;

document.write((B === B) + "<br>"); // Compare Variable B to Variable B

document.write((A === "C") + "<br>"); // Compare Variable A to C

document.write((B === "C") + "<br>");  // Compare Variable B to C

document.write((B === D) + "<br>"); // Compare Variable B to Variable D

document.write((B > 2 && D > 2) + "<br>"); // Using && (and) for a true result

document.write((B > 2 && D < 2) + "<br>"); // Using && (and) for a false result

document.write((B > 2 || D > 12) + "<br>"); // Using || (or) for a true result

document.write((B > 12 || D > 12) + "<br>"); // Using || (or) for a false result

document.write(!(10 === 12) + "<br>"); // Using ! (not) for a true result

document.write(!(10 === 10) + "<br>"); // Using ! (not) for a false result
