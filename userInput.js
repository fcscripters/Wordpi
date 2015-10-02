
var words = document.getElementById("tenWords");
words.innerHTML = '';
var definition = document.getElementById("definition");
definition.innerHTML = '';


function checkInputIsLongerThanThreeletters() {
  var userInput = document.getElementById("search").value;
  console.log(userInput.length + ' ' + userInput);
  if (userInput.length > 3 && /^[a-zA-Z]+$/.test(userInput)) {
    sendInputToRequestWords(userInput);
  }
}
var correct;
var wordsArray;

function sendInputToRequestWords(userInput) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      console.log(request.responseText);
      fullArray = request.responseText.split('£');
      wordsArray = fullArray[0];
      var def = fullArray[1];
      correct = parseInt(fullArray[2]);
      console.log(parseInt(fullArray[2]));
      wordsArray = wordsArray.replace(/[\[]*["]*[\]]*/g, '').split(',');

      setListToZero(words);
      addWords(wordsArray);
      setListToZero(definition);
      getDefinition(def);
    }
  };
  request.open("GET", "/define/" + userInput, true);
  request.send(userInput);
}
document.getElementById("search").addEventListener("keyup", function(e) {
  checkInputIsLongerThanThreeletters();
});

function setListToZero(element) {
  element.innerHTML = '';
  element.innerHTML += '<ul id="words1"></ul>';
}

function addWords(wordsArray) {
  var words = document.getElementById('tenWords');
  for (i = 0; i < 10; i++) {
    if (wordsArray[i] === undefined) {
      wordsArray[i] = '';
    } else {
      words.innerHTML += '<li class="words" id="words'+i+'" onclick="chooseClass(this.id)">' + wordsArray[i] + '</li>';

 }
}
}


function getDefinition(def) {
  var definintion = document.getElementById('definintion');
  definition.innerHTML += def;


}

function chooseClass(id){
var choice = id.slice(-1);
console.log("--------id",id);
if ( choice == correct){
document.getElementById(id).className = 'green';
} else{
document.getElementById(id).className = 'red';
console.log('RED');
}
}
