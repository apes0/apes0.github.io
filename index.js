async function read(f){
  await fetch(f)
  .then((response) => {
    return response;
  })
}

console.log(read('/1.txt'))
