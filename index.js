t = document.getElementById('p')

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  return data;
}

for(let i = 1; i < 10; i ++){
  try{
    p = read(i.toString(10) + '.txt')
    t.innerHTML += p + '<br>'
  } catch(err) {
    alert('error')
    break
  }
}
