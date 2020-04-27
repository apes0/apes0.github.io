let t = document.getElementById("p");

function writeDoc(n){
    for(let i = 0; i < n; i++){
        loadDoc(i.stringify + '.txt')
    }
}

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
                allText = rawFile.responseText;
                if(file === 'pn.txt'){
                    writeDoc(parseInt(allText, 10))
                } else {
                    t.innerHTML += allText
                }
            }
        }
    }
    rawFile.send(null);
}
