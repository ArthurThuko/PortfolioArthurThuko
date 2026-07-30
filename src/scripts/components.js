async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function init() {
  await loadComponent("navbar", "src/components/navbar.html");
  await loadComponent("inicio", "src/components/inicio.html");
  await loadComponent("sobre", "src/components/sobre.html");
  await loadComponent("tecnologias", "src/components/tecnologias.html");
  await loadComponent("contato", "src/components/contato.html");
  await loadComponent("footer", "src/components/footer.html");

  initThemeToggle();
  initMapWrap();
}

init();