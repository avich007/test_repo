let userName, password;

document.getElementById("loginform").addEventListener("submit", (event) => {
  event.preventDefault();
  userName = document.getElementById("username").value;
  password = document.getElementById("password").value;

  userName === "admin" && password === "password"
    ? alert("Login Successful")
    : alert("Invalid username or password");
});

document.getElementById("btnSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
});

document.getElementById("btnSubmit").addEventListener("focus", (event) => {
  event.preventDefault();
  console.log("mouse down", event.clientX, event.clientY);
});

document.getElementById("btnSubmit").addEventListener("mouseup", (event) => {
  event.preventDefault();
  console.log("mouse up");
});

const listItems = ["Divya", "Abhi"];

const listItemComponent = listItems.map((item) => {
  return <li>{item}</li>;
});
