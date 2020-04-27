async function read(f){
  let r = await fetch(f)
  return r.stringify();
}

console.log(read('/1.txt'))
