let name = document.querySelector("#name");
let password = document.getElementById("password");
console.log(name);
console.log(password);
let loginBtn = document.querySelector("#loginBtn");

let retriveData = window.localStorage.getItem("userDetails");
let parsData = JSON.parse(retriveData);
console.log(parsData);
loginBtn.addEventListener("click", () => {
  if (
    name.value === "" ||
    password.value === "" ||
    name.value !== parsData.name ||
    password.value !== parsData.password
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Record Not Found",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    Swal.fire({
      title: "Good job!",
      text: "Login Successfully Completed!",
      icon: "success",
    }).then(() => {
      // myForm.reset();
      window.location = "./home.html";
    });
  }
});
