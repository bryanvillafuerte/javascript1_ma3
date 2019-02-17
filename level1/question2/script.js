//Console.log out elements in JSON file

//I made the code below by copying the contents of the author.json file
jsonData = '[{"video": [{"id": 12312412312, "name": "Ecuaciones Diferenciales", "url": "/video/math/edo/12312412312", "author": {"data": [{"name_author": "Alejandro Morales", "url": "/author/alejandro-morales", "type": "master"}]}}]}]';

(function() {
    var mydata = JSON.parse(jsonData);
    for (var i = 0; i < mydata.length; i++) {
        console.log(mydata[i]);
    }
})();

//tried another method using AJAX - XMLHttpRequest Object
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText);
            for (var i = 0; i < jsonData.video.length; i++) {
                console.log(jsonData.video[i]);
            }
        }
    };
    xhttp.open("GET", "author.json", true);
    xhttp.send();
}

loadDoc();