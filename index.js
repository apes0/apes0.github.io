function loadDoc(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                let allText = rawFile.responseText;
                let t = document.getElementById("p");
                t.innerHTML += allText
            }
        }
    }
    rawFile.send(null);
}
loadDoc('1.txt')
