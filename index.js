t = document.body;

async function lp(){
  for(let i = 1; i > 0; i ++){
    try {
      await read(i.toString(10) + '.txt');
    } catch {
      break;
    }
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  t.innerHTML = data + '<br> + t.innerHTML';
}

lp()
