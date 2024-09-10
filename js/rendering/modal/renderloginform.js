import { renderCreateAuction } from "./renderauctionform.js";

export function renderLoginForm(){
    const modal = document.querySelector(".modal-body");
    modal.innerHTML = "";

    const footer = document.querySelector(".modal-footer");
    footer.innerHTML ="";

    const form = document.createElement("form");

    const loginDiv = document.createElement("div");
    loginDiv.classList.add("d-flex", "flex-column", 
        "justify-content-center", "align-items-center", "m-3");

    const labelForLogin = document.createElement("label");
    labelForLogin.setAttribute("for", "login");
    labelForLogin.textContent = "Login";
    
    const login = document.createElement("input");
    login.setAttribute("type", "text");
    login.setAttribute("name", "email");
    login.setAttribute("id" , "email");
    login.classList.add("col-6", "rounded", "border", "border-info");

    loginDiv.append(labelForLogin, login);

    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("d-flex", "flex-column",
         "justify-content-center", "align-items-center", "m-3");

    const labelForPassword = document.createElement("label");
    labelForPassword.setAttribute("for", "password");
    labelForPassword.textContent = "password";

    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("id", "password");
    password.classList.add("col-6", "rounded", "border", "border-info");

    passwordDiv.append(labelForPassword, password);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("d-flex", "justify-content-center");
    

    const loginButton = document.createElement("button");
    loginButton.classList.add("btn", "btn-success");
    loginButton.innerText ="login";
    loginButton.setAttribute("type", "submit");

    const registerButton = document.createElement("button");
    registerButton.classList.add("btn", "btn-info");
    registerButton.innerText = "here";
    

    buttonDiv.append(loginButton);
    form.append(loginDiv, passwordDiv, buttonDiv);
    form.setAttribute("id", "loginform");

    modal.append(form)

    const footertext = document.createElement("p");
    footertext.innerText = "If you do not hva an account sign up "

    footer.append(footertext, registerButton)

}