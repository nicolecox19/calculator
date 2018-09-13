//Buisness interface
var add = function(number1, number2) {
  return number 1 + number 2
};
var subratract = functiobn(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2
};
var divide = function(number1, number2) {
  return number
}





//user interface
$(document).ready(function()) {
  $("form#add").submit(function(event)) {
    event.preventDefault();
    var number1 = parseInt($(("#add1").val());
    var number2 = parseInt($("#add1").val());
    alert(add(number1, number2));
  });
});
