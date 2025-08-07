document.body.addEventListener("htmx:afterSwap", () => {
  attachNewsletterFormHandler();
});

document.addEventListener("DOMContentLoaded", () => {
  attachNewsletterFormHandler();
  restoreEmail();
});

function attachNewsletterFormHandler() {
  const form = document.querySelector(".newsletter__form");

  if (form && !form.dataset.listenerAdded) {
    form.addEventListener("submit", handleFormSubmit);
    form.dataset.listenerAdded = "true";
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  const emailInput = event.target.querySelector(".newsletter__input");
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    alert("❌ Будь ласка, введіть коректну адресу електронної пошти.");
    return;
  }

  localStorage.setItem("email", email);

  alert("✅ Дякуємо за підписку! Ваш email успішно збережено.");

  emailInput.value = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function restoreEmail() {
  const savedEmail = localStorage.getItem("email");
  if (savedEmail) {
    document.querySelector(".newsletter__input").value = savedEmail;
  }
}

