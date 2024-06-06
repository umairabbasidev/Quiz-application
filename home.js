let profile = document.querySelector("#profile");
let userName = document.querySelector("#userName");
let message = document.querySelector("#message");
let dropDown = document.querySelector("#dropDown");
let box = document.querySelector("#box");

let retriveData = window.localStorage.getItem("userDetails");
let parsData = JSON.parse(retriveData);
console.log(parsData);

let flag = false;

dropDown.addEventListener("click", () => {
  if (flag) {
    box.classList.add("hidden");
    box.classList.remove("block");
    flag = !flag;
  } else {
    box.classList.remove("hidden");
    box.classList.add("block");
    flag = !flag;
  }
});
profile.src = parsData.profile;
userName.innerHTML = parsData.name;
message.innerHTML = parsData.name;
