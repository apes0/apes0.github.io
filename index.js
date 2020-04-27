function read(f){
  await fetch(f)
  .then((response) => {
    return response.json();
  })
}

alert(read('/1.txt'))
