ar words=document.getElementById("tenWords");
		words.innerHTML='';



  function checkInputIsLongerThanThreeletters() {
       var userInput = document.getElementById("search").value;
       console.log(userInput.length + ' ' + userInput);
       if (userInput.length > 3 && /^[a-zA-Z]+$/.test(userInput)) {
           sendInputToRequestWords(userInput);
       }

   }



   function sendInputToRequestWords(userInput) {

       var request = new XMLHttpRequest();
       request.onreadystatechange = function() {
           if (request.readyState === 4) {
               wordsArray = request.responseText.replace(/[\[]*["]*[\]]*/g, '').split(',');
               console.log(wordsArray);
               setListToZero();
               addWords(wordsArray);
           };
       };
       request.open("GET", "/define/" + userInput, true);
       request.send(userInput);

   }

   document.getElementById("search").addEventListener("keyup", function(e) {

       checkInputIsLongerThanThreeletters()


   })

   function setListToZero(){

   	      words.innerHTML='';
  	      words.innerHTML+='<ul id="words1"></ul>';
    }



  unction addWords(wordsArray) {


      var words = document.getElementById('tenWords');
      for (i = 0; i < 10; i++) {
      	   if (wordsArray[i] == undefined){
      	   	   wordsArray[i] = '';
      	   }else{
           words.innerHTML += '<li class="">' + wordsArray[i]+'</li>';
       	   }
       }
    }


    function getDefinition(){


    }





   /*   function onlySelectOne(elements) {
          for (i = 0; i < elements.length; i++) {
              console.log(elements[i])
              if (elements[i].className == "selected") {
                  elements[i].className = "tracks";
              }
          }
      }

      function chooseSongbyClicking() {
          var songs = document.getElementsByClassName("tracks");
          for (var i = 0; i < songs.length; i++) {
              songs[i].onclick = function(e) {
                  document.getElementById(this.id).className = "selected";
                  playPauseStop(this.id)
              }
          };
      }
   */
