
jQuery(document).ready(function(){
  jQuery("img").click(function() {
    alert("This is an image.");
  });


var sentenceInput = prompt("Type a sentence please");

console.log(sentenceInput);

var firstLetter = sentenceInput.charAt(0);
var lastLetter = sentenceInput.charAt(sentenceInput.length-1);

var firstLast;
function firstAndLast(firstLetter, lastLetter){
return firstLast = (firstLetter + lastLetter).toUpperCase();
}
firstAndLast(firstLetter, lastLetter);
alert(firstLast);

var lastFirst;
function lastAndFirst(firstLast){
return lastFirst = firstLast.charAt(1) + firstLast.charAt(0);
}
lastAndFirst(firstLast);
alert(lastFirst);

var third = function(sentenceInput, lastFirst) {
return sentenceInput + lastFirst;
};
var result = third(sentenceInput,lastFirst);

alert(result);

var fourth = function(sentenceInput) {
return Math.floor(sentenceInput.length / 2 );
}
var fifth = function(sentenceInput, result){
return sentenceInput.charAt(result2) + result;
}
var result2 = fourth(sentenceInput);
alert(result2);
var result3 = fifth(sentenceInput, result);
alert(result3);
});