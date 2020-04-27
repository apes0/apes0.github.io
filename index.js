t = document.getElementById('p')

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  t.innerHTML += data;
}

read('pn.txt')
