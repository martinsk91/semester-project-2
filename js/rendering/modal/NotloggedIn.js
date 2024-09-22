import { renderLoginForm } from "./renderloginform.js";
import { renderRegisterForm } from "./renderregisterform.js";
import { addRegisterListener } from "../../handlers/register.js";
import { addLoginListener } from "../../handlers/login.js";
export function notLoggedIn(){
    
    const modal = document.querySelector(".modal-body");
    if(modal){
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
    registerButton.addEventListener('click', addRegisterListener);
    
    loginButton.classList.add("btn", "text-primary", "btn-success");
    loginButton.addEventListener('click', renderLoginForm);
    loginButton.addEventListener('click', addLoginListener);

    modal.append(text);
    footer.append(loginButton, registerButton);

    
    
    }

}