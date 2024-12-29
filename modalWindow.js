"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// Function to open the modal
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function to close the modal
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Add event listeners to all "show-modal" buttons
btnOpenModal.forEach((button) => button.addEventListener("click", openModal));

// Add event listeners for closing the modal
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close the modal when "Escape" key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
