function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "1.txt", true);
    xhttp.send();
}
alert(loadDoc())