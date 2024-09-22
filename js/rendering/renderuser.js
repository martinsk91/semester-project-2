import { logOut } from "../api/auth/logout.js";
import { fetchProfileInfo } from "../api/auth/profilefetch.js";
import { addLoginListener } from "../handlers/login.js";
import { addRegisterListener } from "../handlers/register.js";
import { load } from "../storage/load.js";
import { renderLoginForm } from "./modal/renderloginform.js";
import { renderRegisterForm } from "./modal/renderregisterform.js";

export async function checkUser(){
    const userDiv = document.querySelector("#user");
    const userImg = document.createElement("img");
    const link = document.createElement("a");
    const userName = document.createElement("p");
    const credits = document.createElement("p");
    const signOutButton = document.createElement("button");
    const token = load("token");
    const profile = load("profile");
   
   
    
    
    if(userDiv){
    if(token){
        const {name} = profile;
        
        userName.innerText = name;
        const userProfile = await fetchProfileInfo(name);
        userName.classList.add("mb-0", "text-success")
        credits.innerText = `credits: ${userProfile.data.credits}`
        credits.classList.add("mb-0");
        userImg.src = userProfile.data.avatar.url;
        userImg.classList.add("img-fluid", "profile-img");
        signOutButton.innerText ="Sign Out";
        signOutButton.classList.add("btn","text-start", "text-danger", "w-100", "p-0");
        signOutButton.addEventListener('click', logOut);
        link.href = "/profile";
        link.classList.add("text-decoration-none")
        link.append(userName);
        userDiv.append(userImg, link, credits, signOutButton);


    }

    else{
        userDiv.classList.add("d-flex", "flex-column", "align-items-center")
        const message = document.createElement("p");
        message.innerText = "Sign in or register new account here:"
        message.classList.add("text-info");
        const signInButton = document.createElement("button");
        signInButton.classList.add("btn", "btn-success", "col-12", "col-md-6", "my-1");
        signInButton.innerText = "Sign in";
        signInButton.setAttribute('data-bs-toggle', 'modal');
        signInButton.setAttribute('data-bs-target', '#auctionModal');
        signInButton.addEventListener('click', renderLoginForm);
        signInButton.addEventListener('click', addLoginListener);

        const registerButton = document.createElement("button");
        registerButton.classList.add("btn", "btn-info","col-12", "col-md-6", "my-1");
        registerButton.innerText = "Register";
        registerButton.setAttribute('data-bs-toggle', 'modal');
        registerButton.setAttribute('data-bs-target', '#auctionModal');
        registerButton.addEventListener('click', renderRegisterForm);
        registerButton.addEventListener('click', addRegisterListener);
        userDiv.append(message, signInButton, registerButton);

    }
}

    
}

