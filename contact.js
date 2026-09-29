// ============================================================
// CONTACT PAGE SCRIPT — form validation + mailto submit
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successMsg = document.getElementById("formSuccess");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, errorId, message) {
    const errorEl = document.getElementById(errorId);
    const row = input.closest(".form-row");
    if (message) {
      errorEl.textContent = message;
      row.classList.add("has-error");
    } else {
      errorEl.textContent = "";
      row.classList.remove("has-error");
    }
  }

  function validate() {
    let valid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, "nameError", "Please enter your name.");
      valid = false;
    } else {
      setError(nameInput, "nameError", "");
    }

    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      setError(emailInput, "emailError", "Please enter a valid email address.");
      valid = false;
    } else {
      setError(emailInput, "emailError", "");
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setError(messageInput, "messageError", "Message should be at least 10 characters.");
      valid = false;
    } else {
      setError(messageInput, "messageError", "");
    }

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      successMsg.classList.remove("show");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
    );
    window.location.href = `mailto:sushantprp@gmail.com?subject=${subject}&body=${body}`;

    successMsg.classList.add("show");
    form.reset();
  });

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", validate);
  });
});
