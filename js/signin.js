// Accessing inputs and button

let signinemail = document.getElementById("signinemail");
let signinpassword = document.getElementById("signinpassword");

let loginbtn = document.getElementById("loginbtn");

// getting value from users array in local storage

// eventlistener on button
loginbtn.addEventListener("click", function () {
  if (signinemail.value == "" || signinpassword.value == "") {
    alert("Enter Valid Information");
  } else if (validateEmail(signinemail.value) == false) {
    // Email not valid
    alert("Enter a valid email");
    signinemail.focus();
  } else {
    // nothing here
    console.log("all well");

    // getting values from form
    emailValue = signinemail.value;
    passwordValue = signinpassword.value;

    // Comparing user inputs with localstorage users
    let usersArray = JSON.parse(localStorage.getItem("session"));
    console.log("Users: ", usersArray);

    // boolean to check if user info inputs are valid or not
    let isUser = false;

    for (let i = 0; i < usersArray.length; i++) {
      // console.log("Users emails: ", usersArray[i][0].email);
      if (
        usersArray[i][0].email == emailValue &&
        usersArray[i][0].password == passwordValue
      ) {
        console.log("user is authorized");
        alert("Login Successful!");
        // Simulate a mouse click:
        sessionStorage.setItem(
          "usersArrayforWelcome",
          JSON.stringify(usersArray[i])
        );
        window.location.href = "../userinfo.html";
        isUser = true;
        break;
      }
    }
    if (!isUser) {
      console.log("user is not authorized");
      alert("Wronge email or password");
    }
  }
});

// email validation
function validateEmail(email) {
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email)) {
    return false;
  }
}
