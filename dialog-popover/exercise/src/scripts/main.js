import "../styles/main.css";

/* showModal, closeModal is beschikbaar op dialog elementen */
const arrModalTrigger = document.querySelectorAll("[data-model-target]");

arrModalTrigger.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.currentTarget);

    const targetName = e.currentTarget.dataset.modelTarget;
    const dialog = document.querySelector(`[data-model="${targetName}"]`);

    if (dialog) {
      dialog.showModal();

      const closeButton = dialog.querySelector("button");

      function closedDialog() {
        dialog.close();
      }

      closeButton.addEventListener("click", () => closedDialog());
      closeButton.removeEventListener("click", () => closedDialog());
    }
  });
});
