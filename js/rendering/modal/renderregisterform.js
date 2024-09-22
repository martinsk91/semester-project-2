
import { renderLoginForm } from "./renderloginform.js";
export function renderRegisterForm(){
    const modal = document.querySelector(".modal-body");
    modal.innerHTML = "";
  

    const modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML ="";

    const modalHeader = document.querySelector(".modal-title");
    modalHeader.innerText = "Register User";

    const form = document.createElement("form");

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("d-flex", "flex-column", 
        "justify-content-center", "align-items-center", "m-3");

    const labelForEmail = document.createElement("label");
    labelForEmail.setAttribute("for", "email");
    labelForEmail.textContent = "Email";

    const email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("name", "email");
    email.setAttribute("id" , "email");
    email.classList.add("col-6", "rounded", "border", "border-info");
    email.setAttribute("required", true);
    email.setAttribute("pattern", "^[\\w\\-.]+@(stud\\.)?noroff.no$");

    emailDiv.append(labelForEmail, email);

    const usernameDiv = document.createElement("div");
    usernameDiv.classList.add("d-flex", "flex-column", 
        "justify-content-center", "align-items-center", "m-3");
  
    const labelForUsername = document.createElement("label");
    labelForUsername.setAttribute("for", "name");
    labelForUsername.textContent = "name";
    
    const username = document.createElement("input");
    username.setAttribute("type", "text");
    username.setAttribute("name", "name");
    username.setAttribute("id" , "name");
    username.classList.add("col-6", "rounded", "border", "border-info");
    username.setAttribute("required", true);


    usernameDiv.append(labelForUsername, username);

    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("d-flex", "flex-column", 
        "justify-content-center", "align-items-center", "m-3");

    const labelForPassword = document.createElement("label");
    labelForPassword.setAttribute("for", "password");
    labelForPassword.textContent = "password";

    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("id" , "password");
    username.setAttribute("required", true);
    password.classList.add("col-6", "rounded", "border", "border-info");

    passwordDiv.append(labelForPassword, password);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("d-flex", "justify-content-center");
    

    const registerButton = document.createElement("button");
    registerButton.classList.add("btn", "btn-success");
    registerButton.innerText ="Register";
    registerButton.setAttribute("type", "submit")

    

    buttonDiv.append(registerButton);

    form.append(emailDiv, usernameDiv, passwordDiv, buttonDiv);
    form.setAttribute("id", "registerform")

    modal.append(form);
    const footerText =document.createElement("p");
    footerText.innerText = "If you alredy have an account click ";
    footerText.classList.add("text-info")
    const loginButton = document.createElement("button");
    loginButton.innerText = "here";
    loginButton.addEventListener('click', renderLoginForm);
    loginButton.classList.add("btn", "btn-info")    

    modalFooter.append(footerText, loginButton)

}