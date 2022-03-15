function Dictionary1() {
    var Hunter = {
        Species:"Human",
        Race:"Caucasian",
        Last_Name:"Grayson",
        Age:25,
        Sound:"Sneeze!"
    };
    delete Hunter.Race;
    document.getElementById("Dictionary").innerHTML = Hunter.Race;
}