t = document.getElementById('p')

function lp(n){
  for(let i = 0; i < n; i ++){
    read((i + 1).toString(10) + '.txt')
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  if(f === 'pn.txt'){
    lp(parseInt(data, 10))
  } else {
    t.innerHTML = data + '<br> + t.innerHTML;
  }
}

read('pn.txt')
