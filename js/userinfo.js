let welcomename = document.getElementById("welcomename");

jsarray = JSON.parse(sessionStorage.getItem("usersArrayforWelcome"));
console.log(jsarray);

const name = jsarray[0].username;
// name.style.color = "green";

welcomename.innerHTML += " " + name;

// accessing button update and add event click listener
const deletebtn = document.getElementById("dltbtn");

// btn update accessing and click event
let btnUpdate = document.getElementById("updatebtn");
btnUpdate.addEventListener("click", function () {
  let newName = prompt("Please enter new name");
  if (newName != null) {
    console.log(newName);

    let allUsers = getUsers();
    //   console.log(allUsers);

    for (let i = 0; i < allUsers.length; i++) {
      console.log(allUsers[i]);
      console.log("each user: ", allUsers[i][0], jsarray[0]);
      if (allUsers[i][0].email == jsarray[0].email) {
        allUsers[i][0].username = newName;
        alert("username Updated Successfully!");
        welcomename.innerHTML = newName;
        break;
      }
    }
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("session", JSON.stringify(allUsers));
    jsarray[0].username = newName;
    sessionStorage.setItem("usersArrayforWelcome", JSON.stringify(jsarray));
  }
});

// Delete Button
deletebtn.addEventListener("click", function (e) {
  let allUsers = getUsers();
  //   console.log(allUsers);

  const newUsersAfterDelete = allUsers.filter((users) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email != jsarray[0].email) {
        return users[i];
      }
    }
  });

  //   console.log(newUsersAfterDelete);

  let confirmBtn = confirm("You really want to delete your account?");
  if (confirmBtn == true) {
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("session", JSON.stringify(newUsersAfterDelete));
    alert("Account Deleted!");
    window.location.href = "../signup.html";
  } else {
    // txt = "You pressed Cancel!";
  }
});

// getting users function
function getUsers() {
  let allUsers = JSON.parse(localStorage.getItem("session"));
  return allUsers;
}
