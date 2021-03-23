// Accessing all inputs and buttons
let username = document.getElementById("usernameinput");
let email = document.getElementById("emailinput");
let password = document.getElementById("passinput");
// console.log(inputs);

let btnregister = document.getElementById("signupbtn");

class Users {
  username;
  email;
  password;
}

usersArray = [];

btnregister.addEventListener("click", function () {
  //   console.log("clicked")
  //   console.log(username.value)
  if (username.value == "" || email.value == "" || password.value == "") {
    alert("Enter Valid Information");
  } else if (validateEmail(email.value) == false) {
    // Email not valid
    alert("Enter a valid email");
    email.focus();
  } else {
    let user = new Users();
    user.username = username.value;
    user.email = email.value;
    user.password = password.value;

    console.log(user);
    usersArray.push(user);
    console.log(usersArray);

    // Storing data in local storage
    SaveDataToLocalStorage(usersArray);
    alert("Registration Successfull");

    username.value = "";
    email.value = "";
    password.value = "";
    window.location.href = "../index.html";
  }
});

// function for storing data in serializable array
function SaveDataToLocalStorage(data) {
  var a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("session")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(data);

  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("session", JSON.stringify(a));
}

// email validation
function validateEmail(email) {
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email)) {
    return false;
  }
}
