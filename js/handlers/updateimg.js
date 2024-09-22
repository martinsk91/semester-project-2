import { updateAvatar } from "../api/auth/updateprofile.js";


export function addUpdateListener(name){
    const form = document.querySelector("#updateform");
    const updateField = document.querySelector("#updatefield");

    form.addEventListener('submit', (event) =>{
        updateField.value = ""
        event.preventDefault();
        const img = updateField.value;
        updateAvatar(name, img)
        .then(()=> {
            location.reload();
        })
    })
}


        
        

