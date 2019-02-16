/*Console.log out elements in JSON file
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "author.json", false);
    xhttp.send();

    var jsonData = JSON.parse(xhttp.responseText);
    for (var i = 0; i < jsonData.length; i++) {
        console.log(jsonData[i]);
    }
}

loadDoc();*/

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText);
            for (var i = 0; i < jsonData.length; i++) {
                console.log(jsonData[i]);
            }
        }
    };
    xhttp.open("GET", "author.json", true);
    xhttp.send();
}

loadDoc();