const errorIcon = document.querySelector(".error");
const form = document.querySelector(".form");
const emailInput = form.querySelector(".email");
const warningMsg = form.querySelector("p");

form.addEventListener("submit", e => {
  e.preventDefault();
  const value = emailInput.value;
  if (!validateEmail(value)) {
    warningMsg.textContent = "Please provide a valid email";
    warningMsg.classList.remove("success");
    errorIcon.style.visibility = "visible";
    warningMsg.classList.add("warning");
  } else {
    warningMsg.classList.remove("warning");
    warningMsg.textContent = "Valid email";
    warningMsg.classList.add("success");
  }
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}