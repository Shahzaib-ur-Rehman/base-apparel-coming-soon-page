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
    alert("ss")
  } else {
    const errorBox = document.getElementById("email-error");
    errorBox.style.display = "block";
  }
}
