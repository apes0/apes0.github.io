t = document.getElementById('p');

function lp(n){
  for(let i = n; i > 0; i --){
    read(i.toString(10) + '.txt');
    var l = Object.keys(p).length;
    for(let i = 0; i < l; i ++){
      t.innerHTML += p[(i + 1).stringify()];
    }
  }
}

p = {}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    lp(parseInt(data, 10));
  } else {
    p[f.replace('.txt', '')] = data;
  }
}

read('pn.txt');
