t = document.getElementById('p');

p = {}

function lp(n){
  for(let i = n; i > 0; i --){
    read(i.toString(10) + '.txt');
  }
  alert(p)
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    lp(parseInt(data, 10));
  } else {
    alert(data)
    p[f.replace('.txt', '')] = data;
  }
}

read('pn.txt');
