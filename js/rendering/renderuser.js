import { load } from "../storage/load.js";
import { renderLoginForm } from "./modal/renderloginform.js";
import { renderRegisterForm } from "./modal/renderregisterform.js";

export function checkUser(){
    const userDiv = document.querySelector("#user");
    const userImg = document.createElement("img");
    const userName = document.createElement("p");
    const credits = document.createElement("p");
    const signOutButton = document.createElement("button");
    const token = load("token");
    const profile = load("profile");
   
    
    
    if(userDiv){
    if(token){
        const {name, avatar} = profile;
        userName.innerText = name;
        userName.classList.add("mb-0")
        credits.innerText = `credits:`
        credits.classList.add("mb-0");
        userImg.src = avatar.url;
        userImg.classList.add("img-fluid", "profile-img");
        signOutButton.innerText ="Sign Out";
        signOutButton.classList.add("btn","text-start", "text-danger", "w-100", "p-0");
        // signOutButton.addEventListener('click', () => logOut)
        userDiv.append(userImg, userName, credits, signOutButton);

    }

    else{
        userDiv.classList.add("d-flex", "flex-column", "align-items-center")
        const message = document.createElement("p");
        message.innerText = "Sign in or register new account here:"
        message.classList.add("text-info");
        const signInButton = document.createElement("button");
        signInButton.classList.add("btn", "btn-success", "col-6", "my-1");
        signInButton.innerText = "Sign in";
        signInButton.setAttribute('data-bs-toggle', 'modal');
        signInButton.setAttribute('data-bs-target', '#auctionModal');
        signInButton.addEventListener('click', renderLoginForm);

        const registerButton = document.createElement("button");
        registerButton.classList.add("btn", "btn-info", "col-6", "my-1");
        registerButton.innerText = "Register";
        registerButton.setAttribute('data-bs-toggle', 'modal');
        registerButton.setAttribute('data-bs-target', '#auctionModal');
        registerButton.addEventListener('click', renderRegisterForm);
        userDiv.append(message, signInButton, registerButton);

    }
}

    
}

