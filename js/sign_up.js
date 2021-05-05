function checkEmpty() {

    var email = document.getElementsByName("email_address_sign_up")[0].value;
    var name = document.getElementsByName("user_name")[0].value;
    var surname = document.getElementsByName("user_surname")[0].value;
    var birthdate = document.getElementById("birthdate").value;
    var password = document.getElementsByName("password_sign_up")[0].value;
    return email != "" & name != null & surname != null & birthdate != "" & password != "";
}

document.getElementById('sign_in').addEventListener('click', (e) => {
  e.preventDefault();
  var email = document.getElementsByName("email_address_sign_in")[0].value;
  var password = document.getElementsByName("password_sign_in")[0].value;


  if (localStorage.getItem(email) === null) {
    console.log("test");
    document.getElementById("sign_in_error").innerHTML = "user does not exist or wrong email";
  }

  else if (localStorage.getItem(email) == password) {
    sessionStorage.setItem("sign_in", true);
    window.location.href="index.html";
  }

  else {
    document.getElementById("sign_in_error").innerHTML = "wrong password";
  }
});


document.getElementById('sign_up').addEventListener('click', (e) => {
  e.preventDefault();
  console.log("signUp");
  var email = document.getElementsByName("email_address_sign_up")[0].value;
  var password = document.getElementsByName("password_sign_up")[0].value;

  if (localStorage) {
      if (localStorage.getItem(email) == null & checkEmpty()) {
      localStorage.setItem(email, password);
      return true;
    }

    else if (!checkEmpty()) {
      document.getElementById("sign_up_error").innerHTML = "please fill in each field";
      return false;
    }

    else {
      document.getElementById("sign_up_error").innerHTML = "user already exists";
      return false;
    }
  }

  else {
    alert("Sorry, your browser does not support local storage");
    return false;
  }
})