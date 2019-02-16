document.getElementById("submit").addEventListener("click",function() {
    var inputTest = document.getElementsByTagName("input");

    for(var i=0; i < inputTest.length; i++){
        var myInput = inputTest[i].value;
        var myPattern = new RegExp(inputTest[i].pattern);
        var myTest = myPattern.test(myInput);
        console.log(myTest);
    }
})