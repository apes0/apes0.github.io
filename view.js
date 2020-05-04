f = window.location.href.replace(window.location.hostname + '/view?', '');

async function gf(f) {
  const res = await fetch(f);
  let data = await res.json();
  let ttl = data.title;
  let p = data.text;
  let pg = '<h1>' + ttl + '</h1><p>' + p + '</p>';
  document.body.innerHTML += data;
}

gf(f)
