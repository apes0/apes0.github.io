function loadDoc(d) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        return this.responseText;
        }
    };
    xhttp.open("GET", d, true);
    xhttp.send();
}
alert(loadDoc('1.txt'))
