import "../styles/main.css";

const toggleButton = document.querySelector("#toggle-color-mode");
const card = document.querySelector(".card");

toggleButton.addEventListener("click", () => {
  card.classList.toggle("dark-mode");
});
