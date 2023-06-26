document.getElementById("submitButton").addEventListener("click", function (event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirmEmail").value;
  var address1 = document.getElementById("address1").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var phone = document.getElementById("phone").value;

  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }

  var isValid = true;

  if (firstName.trim() === "") {
    document.getElementById("firstNameError").textContent = "First Name is required";
    isValid = false;
  }

  if (lastName.trim() === "") {
    document.getElementById("lastNameError").textContent = "Last Name is required";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  if (confirmEmail.trim() === "") {
    document.getElementById("confirmEmailError").textContent = "Confirm Email is required";
    isValid = false;
  } else if (confirmEmail !== email) {
    document.getElementById("confirmEmailError").textContent = "Emails do not match";
    isValid = false;
  }

  if (address1.trim() === "") {
    document.getElementById("address1Error").textContent = "Address 1 is required";
    isValid = false;
  }

  if (city.trim() === "") {
    document.getElementById("cityError").textContent = "City is required";
    isValid = false;
  }

  if (state === "") {
    document.getElementById("stateError").textContent = "State/Province is required";
    isValid = false;
  }

  if (zip.trim() === "") {
    document.getElementById("zipError").textContent = "Zip/Postal Code is required";
    isValid = false;
  }
  
  if (phone.trim() === "") {
    document.getElementById("phoneError").textContent = "Phone Number is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("myForm").style.display = "none";
    var thankYouMessage = document.createElement("h1");
    thankYouMessage.textContent = "Thank You!";
    document.body.appendChild(thankYouMessage);
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}