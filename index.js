t = document.getElementById('p')

function lp(n){
  alert(2)
  for(let i = 0; i < n; i ++){
    read(i.toString(10) + '.txt')
  }
}

async function read(f) {
  alert(1)
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    lp(parseInt(data, 10))
  } else {
    t.innerHTML += data;
  }
}

read('pn.txt')
