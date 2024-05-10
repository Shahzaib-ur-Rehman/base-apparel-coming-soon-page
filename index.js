function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return true; // Email is valid
  } else {
    return false; // Email is not valid
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (validateEmail()) {
    const errorBox = document.getElementById("email-error");
    const errorIcon = document.getElementById("error-icon");
    errorBox.style.display = "none";
    errorIcon.style.display = "none";
    email.style.border="1px solid #ce9797";
    email.removeAttribute("aria-invalid");
    alert("Successfully Subscribed!!!")
  } else {
    const errorBox = document.getElementById("email-error");
    const errorIcon = document.getElementById("error-icon");
    errorBox.style.display = "block";
    errorIcon.style.display = "block";
    email.style.border="2px solid #f96262";
    email.setAttribute("aria-invalid", "true");
  }
}
