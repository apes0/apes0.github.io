fetch('http://example.com/movies.json')
  .then((r) => {
    alert(r.stringify);
  })
