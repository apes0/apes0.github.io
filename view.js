f = window.location.href.replace(window.location.hostname + '/view?', '');
document.body.innerHTML += fetch(f);
