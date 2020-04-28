t = document.getElementById('p');

async function lp(n){
  for(let i = n; i > 0; i --){
    await read(i.toString(10) + '.txt');
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    l = parseInt(data,10);
    lp(l);
  } else {
    t.innerHTML += data
  }
}

read('pn.txt');
