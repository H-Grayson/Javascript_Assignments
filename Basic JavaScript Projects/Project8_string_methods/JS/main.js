function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
} 

function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function slice_Example() {
    var Example = "What is the longest word in this sentence?";
    var Schlice = Example.slice(33,41);
    document.getElementById("Slicee").innerHTML = Schlice;
}

function upperCase_Ex() {
    var Example1 = "This sentence should be all caps.";
    var upper = Example1.toUpperCase();
    document.getElementById("UPPUH").innerHTML = upper;
}

let searchEx = "Sally sells sea shells by the sea shore";
let searchTest = searchEx.search("shells");
document.write(searchTest);
let fixedTest = searchEx.fixed();
document.write(fixedTest);

function string_Method() {
    var Y = 53;
    document.getElementById("Numbers_to_string").innerHTML = Y.toString();
}

function precision_Method() {
    var X = 12345.987654321;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function string_Method() {
    let test = new String("777 is a lucky number");
    let result = test.valueOf() 
    document.getElementById("string").innerHTML = result;
}
