import "./styles/main.css";

const title = document.querySelector<HTMLHeadingElement>("#title");
const subtitle = document.querySelector<HTMLParagraphElement>("#subtitle");
const counterButton = document.querySelector<HTMLButtonElement>("#counter");

if (title) {
  title.textContent = "Babel + Webpack teste + TypeScript";
}

if (subtitle) {
  const now = new Date();
  subtitle.textContent = `Atualizado em ${now.toLocaleString("pt-BR")}`;
}

if (counterButton) {
  let clicks = 0;
  counterButton.addEventListener("click", () => {
    clicks += 1;
    counterButton.textContent = `Cliques: ${clicks}`;
  });
}
