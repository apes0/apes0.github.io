f = window.location.href.replace(window.location.hostname + '/view?', '');

async function gf(f) {
  document.body.innerHTML += await fetch(f);
}

gf(f)
