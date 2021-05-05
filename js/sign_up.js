function checkEmpty() {

    var email = document.getElementsByName("email_address_sign_up")[0].value;
    var name = document.getElementsByName("user_name")[0].value;
    var surname = document.getElementsByName("user_surname")[0].value;
    var birthdate = document.getElementById("birthdate").value;
    var password = document.getElementsByName("password_sign_up")[0].value;
    return email != "" & name != null & surname != null & birthdate != "" & password != "";

  }

  function signIn() {

    var email = document.getElementsByName("email_address_sign_in")[0].value;
    var password = document.getElementsByName("password_sign_in")[0].value;

    if (localStorage) {

      if (localStorage.getItem(email) == null) {
        document.getElementById("sign_in_error").innerHTML = "user does not exist or wrong email";
        return false;
      }

      else if (localStorage.getItem(email) == password) {
        sessionStorage.setItem("sign_in", true);
        return true;
      }

      else {
        document.getElementById("sign_in_error").innerHTML = "wrong password";
        return false;
      }

    }

    else {
      alert("Sorry, your browser does not support local storage");
    }

  }

  function signUp() {

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

  }
  
