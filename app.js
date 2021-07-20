const modalEl = document.querySelector(".modal");
const triggerBtnEl = document.querySelector(".trigger");
const closeXBtnEl = document.querySelector(".close");

// Event Listener on JOIN Button
triggerBtnEl.addEventListener("click", (_) => {
  modalEl.classList.toggle("open");
});

// Event Listener on X Button
closeXBtnEl.addEventListener("click", (_) => {
  modalEl.classList.toggle("open");
});

// Event Listener on Outside of modal__contents
document.addEventListener("click", (e) => {
  if (e.target === modalEl) {
    modalEl.classList.toggle("open");
  }
});
