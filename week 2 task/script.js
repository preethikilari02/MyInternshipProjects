document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
      
  if (password !== confirmPassword)
  {
    alert("Passwords do not match.");
    return;
  }

  
  if (password.length < 8) {
    alert("Password should be at least 8 characters long");
    return;
  }

  window.location.href = "Confirmation_Page.html";

  document.getElementById("registrationForm").reset();
});