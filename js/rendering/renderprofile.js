import { fetchProfileInfo } from "../api/auth/profilefetch.js";
import { updateAvatar } from "../api/auth/updateprofile.js";
import { addUpdateListener } from "../handlers/updateimg.js";
import { load } from "../storage/load.js";
import { showInputField } from "./showinputfield.js";

export async function renderProfile(){
    const token = load("token");
    const profile = load("profile");
    const username = document.querySelector("#profilename");
    const profileimg = document.querySelector("#profileimg");
    const editButton = document.querySelector("#editimg");
    

    if(username && profileimg){
        

    if(token){
        const {name} = profile
      
        username.innerText = name;
        username.classList.add("text-success");
        editButton.addEventListener('click', showInputField);
        const userProfile = await fetchProfileInfo(name);
        profileimg.src = userProfile.data.avatar.url;
        profileimg.alt = userProfile.data.avatar.alt;
        addUpdateListener(name);
        
        
       
        // updateAvatar(name, "https://www.athenas.no/wp-content/uploads/omslag-40-scaled-e1637833798547.jpg")
    

    }
}

}
