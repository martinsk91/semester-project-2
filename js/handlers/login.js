import { login } from "../api/auth/login.js";
import { load } from "../storage/load.js";
import { renderErrorMessage } from "../rendering/modal/loginerrormessage.js";

export function addLoginListener(){
    const form = document.querySelector("#loginform");

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value
        const password = form.password.value;

        const profile = {
            email: email,
            password: password
        }
        login(profile)
        .then(()=> {
            const token = load("token")
            if(token){
                window.location.reload();
            }

            else{
                renderErrorMessage();
            }
        })
    
     
        
    })

}

