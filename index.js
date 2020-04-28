t = document.getElementById('p');

p = {}

l = 0;

function lp(n){
  for(let i = n; i > 0; i --){
    read(i.toString(10) + '.txt');
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    l = parseInt(data,10)
    alert(l)
    lp(l);
  } else {
    alert(data)
    p[f.replace('.txt', '')] = data;
  }
}

read('pn.txt');
render()

function render(){
  if( l == Object.keys(obj).length){
    for(let i = l; i > 0; i --){
      t.innerHTML += p[i]
    }
  } else {
    setTimeout(render, 10)
  }
}
