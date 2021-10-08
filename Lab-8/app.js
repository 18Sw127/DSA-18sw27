function add() {
    var val1 = document.getElementById("txt1").value;
    var val2 = document.getElementById("txt2").value;
    var plus = +val1 + +val2;
    var answer = document.getElementById("txt3").value = plus;
}
function subtract() {
    var val1 = document.getElementById("txt1").value;
    var val2 = document.getElementById("txt2").value;
    var answer = document.getElementById("txt3").value = val1 - val2;
}
function multiply() {
    var val1 = document.getElementById("txt1").value;
    var val2 = document.getElementById("txt2").value;
    var answer = document.getElementById("txt3").value = val1 * val2;
}
function divide() {
    var val1 = document.getElementById("txt1").value;
    var val2 = document.getElementById("txt2").value;
    var answer = document.getElementById("txt3").value = val1 / val2;
}
