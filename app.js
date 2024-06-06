let name = document.querySelector("#name");
let email = document.querySelector("#email");
let profile = document.querySelector("#profile");
let password = document.querySelector("#password");
let myForm = document.querySelector("#myForm");

let signInBtn = document.querySelector("#signIn");

check.addEventListener("click", () => {
  check.value = "on";

  console.log(check.value);
});

console.log();
signInBtn.addEventListener("click", () => {
  if (
    name.value === "" ||
    email.value === "" ||
    profile.value === "" ||
    password.value === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter the filed!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else if (check.value === "of") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please marked the check",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    let userDetails = {
      name: name.value,
      email: email.value,
      profile: profile.value,
      password: password.value,
    };

    console.log(userDetails);

    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
    let retriveData = window.localStorage.getItem("userDetails")
    let parsData = JSON.parse(retriveData);
    // console.log(first)
     Swal.fire({
      title: "Good job!",
      text: "Registration Successfully Completed!",
      icon: "success",
    }).then(() => {
      myForm.reset();
      window.location = "./login.html";
    });
  }
});

// let obj = {
//   name: "Umair",
//   age: 21,
// };

//  window.localStorage.setItem("userDetails", JSON.stringify(obj));

// let retriveData = window.localStorage.getItem("userDetails")

// let parseData  = JSON.parse(retriveData)
// console.log(parseData)
