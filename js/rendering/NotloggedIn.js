export function notLoggedIn(){
    const modal = document.querySelector(".modal-body");
    const footer =document.querySelector(".modal-footer");
    const text = document.createElement("p");
    const loginButton = document.createElement("button");
    const registerButton = document.createElement("button");

    text.innerText = "It looks like you're not signed in. Please sign in or register to proceed."

    loginButton.innerText = "Login";
    registerButton.innerText = "Register";

    registerButton.classList.add("btn", "text-primary", "btn-info")
    loginButton.classList.add("btn", "text-primary", "btn-success")

    modal.append(text);
    footer.append(loginButton, registerButton);


}