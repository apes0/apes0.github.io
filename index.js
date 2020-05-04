t = document.body;

mchr = 100;

async function lp() {
  let i = 1, n = '';
  while(true) {
    try {
      n = n.concat(i)
      console.log(n)
      await read(n + '.json');
      i ++;
    } catch {
      break;
    }
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  let t = data.title;
  let p = data.text;
  if(p.length > mchr){
    p = p.slice(0, mchr) + '...<button onClick = "view( f )">View more</button>'.replace(' f ', "'" + f + "'");
  }
  let pg = '<h1>' + t + '</h1><p>' + p + '</p>';
  t.innerHTML = pg + '<br>' + t.innerHTML;
}

lp();

function view(p) {
  window.location.href = window.location.hostname + '/view' + '?' + p;
}