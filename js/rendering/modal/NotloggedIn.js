import { renderLoginForm } from "./renderloginform.js";
import { renderRegisterForm } from "./renderregisterform.js";
export function notLoggedIn(){
    
    const modal = document.querySelector(".modal-body");
    modal.innerHTML = "";
    const footer =document.querySelector(".modal-footer");
    footer.innerHTML ="";
    const text = document.createElement("p");
    const loginButton = document.createElement("button");
    const registerButton = document.createElement("button");

    text.innerText = "It looks like you're not signed in. Please sign in or register to proceed."

    loginButton.innerText = "Login";
    registerButton.innerText = "Register";

    registerButton.classList.add("btn", "text-primary", "btn-info");
    registerButton.addEventListener('click', renderRegisterForm);
    
    loginButton.classList.add("btn", "text-primary", "btn-success");
    loginButton.addEventListener('click', renderLoginForm);

    modal.append(text);
    footer.append(loginButton, registerButton);

    
    


}