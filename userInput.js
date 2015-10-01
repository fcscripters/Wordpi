   function checkInputIsLongerThanThreeletters() {
       var userInput = document.getElementById("search").value;
       console.log(userInput.length + ' ' + userInput);
       if (userInput.length > 3 && /^[a-zA-Z]+$/.test(userInput)) {
           alert('four letters typed' + userInput);

           sendInputToRequestWords(userInput);
       }

   }


   
   function sendInputToRequestWords(userInput) {

       var request = new XMLHttpRequest();
       request.onreadystatechange = function() {
           if (request.readyState === 4) {
               console.log(request.responseText);
           };
       };
       request.open("GET", "/define/" + userInput, true);
       request.send(userInput);

   }

   document.getElementById("search").addEventListener("keyup", function(e) {

       checkInputIsLongerThanThreeletters()


   })
