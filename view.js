f = window.location.href.replace(window.location.hostname + '/view?', '');

async function gf(f) {
  const rel = await fetch(f);
  let data = await res.json();
  document.body.innerHTML += data;
}

gf(f)
