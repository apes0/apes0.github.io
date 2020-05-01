t = document.body;

async function lp() {
  let i = 1;
  while(true) {
    try {
      await read(i.toString(10) + '.txt');
      i ++;
    } catch {
      break;
    }
  }
}

async function read(f) {
  const res = await fetch(f);
  let data = await res.json();
  t.innerHTML = data + '<br>'+ t.innerHTML;
}

lp()

function view(p) {
  window.location.href = window.location.hostname + '/view' + '?' + p;
}
