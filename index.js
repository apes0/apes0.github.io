async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  return data;
}

console.log(read('/1.txt'))
