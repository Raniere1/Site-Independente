import Swup from "https://unpkg.com/swup@4?module";
const swup = new Swup();

function inicializarMenu() {
  const botaoMenu = document.getElementById("btnMenu");
  const menuMobile = document.getElementById("menu-mobile");

  // Garante que os elementos existem na página atual
  if (botaoMenu && menuMobile) {
    // Remove qualquer evento antigo para não duplicar cliques
    botaoMenu.replaceWith(botaoMenu.cloneNode(true));

    // Pega a referência atualizada do botão após clonar
    const novoBotaoMenu = document.getElementById("btnMenu");

    novoBotaoMenu.addEventListener("click", () => {
      // Checa o estilo real renderizado pelo navegador para evitar o bug do primeiro clique
      const displayAtual = window.getComputedStyle(menuMobile).display;

      if (displayAtual === "block") {
        menuMobile.style.display = "none";
      } else {
        menuMobile.style.display = "block";
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializarMenu);
} else {
  inicializarMenu();
}

swup.hooks.on("page:view", inicializarMenu);
