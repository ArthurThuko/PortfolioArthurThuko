async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function init() {
  await loadComponent("navbar", "./components/navbar.html");
  initThemeToggle();
}

init();