function My_First_Function() {
    var str= "This is the button text!"; //Assigning str text
    document.getElementById("Button_Text").innerHTML = str; //Giving str an id
    var str1= "This is a paragraph element!"; //Assigning str1 text
    document.getElementById("Paragraph_Text").innerHTML = str1; //Giving str1 an id
}

function myFunction() {
    var sentence = "I am learning"; // Assigning sentence text
    sentence+= " a lot from this course!"; // Concatenating with the var sentence
    document.getElementById("Concatenate_String").innerHTML = sentence; //Giving sentence an id
}