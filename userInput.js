function checkInputIsLongerThanThreeletters() {
    var userInput = document.getElementById("search").value;
    console.log(userInput);
    if (userInput.length > 3 && /^[a-zA-Z]+$/.test(str)) {
        alert('four letters typed' + userInput);
        return userInput;
    }

}


function sendInputToRequestWords(userInput) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("ouput").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", url + userInput, true);
    xhttp.send();


}


document.getElementById("search").addEventListener("keydown", function(e) {

    checkInputIsLongerThanThreeletters()
    sendInputToRequestWords()



})




//});
