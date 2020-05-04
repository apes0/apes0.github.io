t = document.body;

mchr = 100;

async function lp() {
  let i = 1;
  while(true) {
    try {
      await read(i.toString(10) + '.json');
      i ++;
    } catch {
      break;
    }
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  console.log(data);
  let t = data.title;
  let p = data.text;
  console.log(t);
  console.log(p);
  if(p.length > mchr){
    p = p.slice(0, mchr) + '...<button onClick = "view( f )">View more</button>'.replace(' f ', "'" + f + "'");
  }
  let pg = '<h1>' + t + '</h1><p>' + p + '</p>';
  console.log(pg);
  t.innerHTML = pg + '<br>' + t.innerHTML;
}

function view(p) {
  window.location.href = window.location.hostname + '/view' + '?' + p;
}

lp()