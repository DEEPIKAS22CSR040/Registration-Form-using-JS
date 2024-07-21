<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Validation</title>
<style>
.error { color: red; }
</style>
</head> 
<body style="margin:0;
background-image : url('form_back.jpg')";>

<form id="registrationForm" onsubmit="return validateForm()" style=" width:400px;
margin:20vh auto 0 auto;
padding:30px">
<h2>Registration Form</h2>

<div style=" border: 4px solid purple ;
	border-radius: 4px;
background-color:LightGray;
	display: block;
	font-size: 18px;
	padding: 10px;
	width: 100%;
">

  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)"><br>
  <span id="nameError" class="error"></span><br>

  <label for="id">ID:</label><br>
  <input type="text" id="id" name="id" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)"><br>
  <span id="idError" class="error"></span><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)"><br>
  <span id="emailError" class="error"></span><br>

  <label for="department">Department:</label><br>
  <select id="department" name="department" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
    <option value="">Select Department</option><br>
    <option value="cse">Computer Science and Engineering</option><br>
    <option value="it">Information Technology</option><br>
    <option value="csd">Computer Science and Design</option><br>
    <option value="ece">Electronics and Communication Engineering</option><br>
  </select><br>
  <span id="departmentError" class="error"></span><br>

  <label>Gender:</label><br>
  <input type="radio" id="male" name="gender" value="male" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)"> 
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
  <label for="female">Female</label><br>
  <span id="genderError" class="error"></span><br>

  <label>Year of Study:</label><br>
  <input type="radio" id="year1" name="year" value="1" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
  <label for="year1">1st Year</label>
  <input type="radio" id="year2" name="year" value="2" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
  <label for="year2">2nd Year</label>
  <input type="radio" id="year3" name="year" value="3" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
  <label for="year3">3rd Year</label>
  <input type="radio" id="year4" name="year" value="4" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
  <label for="year4">4th Year</label><br>
  <span id="yearError" class="error"></span><br>

  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)"><br>
  <span id="passwordError" class="error"></span><br>

  <label for="confirmPassword">Confirm Password:</label><br>
  <input type="password" id="confirmPassword" name="confirmPassword" onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)"><br>
  <span id="confirmPasswordError" class="error"></span><br>
<input type="checkbox" id="v1" name="v1" required onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)" onfocus="handleFocus(this)" onblur="handleBlur(this)">
<label for="v1">Agree to the terms and condition</label><br>
<span id="checkError" class="error"></span><br>
<input type="submit" value="Register" onclick="submitForm()"></div>
</form>

<script>
var formSubmitted = false;

function handleMouseOver(element) {
  element.style.backgroundColor = "CornflowerBlue";
}

function handleMouseOut(element) {
  element.style.backgroundColor = "#fff";
}

function handleFocus(element) {
  element.style.border = "2px solid blue";
}

function handleBlur(element) {
  element.style.border = "1px solid #ccc";
}

function validateForm() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var email = document.getElementById("email").value;
  var department = document.getElementById("department").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var year = document.querySelector('input[name="year"]:checked');
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var check = document.getElementById("v1").checked;

  var nameError = document.getElementById("nameError");
  var idError = document.getElementById("idError");
  var emailError = document.getElementById("emailError");
  var departmentError = document.getElementById("departmentError");
  var genderError = document.getElementById("genderError");
  var yearError = document.getElementById("yearError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  var ce = document.getElementById("checkError");
  var isValid = true;

  
  if (!formSubmitted) {
    nameError.innerHTML = "";
    idError.innerHTML = "";
    emailError.innerHTML = "";
    departmentError.innerHTML = "";
    genderError.innerHTML = "";
    yearError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
    ce.innerHTML = "";
  }

  if (formSubmitted) {
    if (name.trim() === "") {
      nameError.innerHTML = "Name is required";
      isValid = false;
    }

    if (id.trim() === "") {
      idError.innerHTML = "ID is required";
      isValid = false;
    }

    if (email.trim() === "") {
      emailError.innerHTML = "Email is required";
      isValid = false;
    }

    if (department === "") {
      departmentError.innerHTML = "Department is required";
      isValid = false;
    }

    if (!gender) {
      genderError.innerHTML = "Gender is required";
      isValid = false;
    }

    if (!year) {
      yearError.innerHTML = "Year of Study is required";
      isValid = false;
    }

    if (password === "") {
      passwordError.innerHTML = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      passwordError.innerHTML = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      passwordError.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long";
      isValid = false;
    }

    if (!check) {
      ce.innerHTML = "Agree to the terms and conditions";
      isValid = false;
    }


    if (confirmPassword === "") {
      confirmPasswordError.innerHTML = "Please confirm your password";
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError.innerHTML = "Passwords do not match";
      isValid = false;
    }
  }

  return isValid;
}

function submitForm() {
  formSubmitted = true;
  return validateForm();
}
</script>

</body>
</html>
