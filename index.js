async function read(f){
  let r = await fetch(f)
  return r.json();
}

console.log(read('/1.txt'))
