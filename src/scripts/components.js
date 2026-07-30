async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function init() {
  await loadComponent("navbar", "./components/navbar.html");
  await loadComponent("inicio", "./components/inicio.html");
  await loadComponent("sobre", "./components/sobre.html");
  await loadComponent("tecnologias", "./components/tecnologias.html");

  initThemeToggle();
  initMapWrap();
}

init();