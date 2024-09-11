import { register } from "../api/auth/register.js";
import { renderLoginForm } from "../rendering/modal/renderloginform.js";

export function addRegisterListener(){
    const form = document.querySelector("#registerform");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const email =form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        const profile = {
            email: email,
            name: name,
            password: password
        }

        register(profile)
        .then(()=> {
            renderLoginForm();
        });
        
    })
}