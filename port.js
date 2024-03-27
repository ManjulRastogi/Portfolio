const name=document.querySelector("#name");
const email=document.querySelector("#email");
const msg=document.querySelector("#msg");
const btn=document.querySelector("#btn");

const get_name = function () {
    console.log(name.value);
    console.log(email.value);
    console.log(msg.value);
}
btn.addEventListener("click", get_name);