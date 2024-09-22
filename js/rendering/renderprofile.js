import { fetchProfileInfo } from "../api/auth/profilefetch.js";
import { load } from "../storage/load.js";

export async function renderProfile(){
    const token = load("token");
    const profile = load("profile");
    const username = document.querySelector("#profilename");
    const profileimg = document.querySelector("#profileimg");
    const editButton = document.querySelector("#editimg");

    if(username && profileimg){
        

    if(token){
        const {name, avatar} = profile
        profileimg.src = avatar.url;
        profileimg.alt = avatar.alt;
        username.innerText = name;
        console.log(profile);
        const userProfile = await fetchProfileInfo(name);
        console.log(userProfile);

    }
}

}
