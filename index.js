t = document.body;

async function lp(){
  for(let i = 1; i > 0; i ++){
    await read(i.toString(10) + '.txt');
  }
}

async function read(f) {
  try {
    const res = await fetch(f);
    let data = await res.json();
    t.innerHTML += data;
  } catch {
    return;
  }
}
