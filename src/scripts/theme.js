function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
  });
}