// /auction/profiles/<name>
import { API_URL } from "../variabels.js"
import { headers } from "./fetchtoken.js";

export async function fetchProfileInfo(name) {
    const profileURL = API_URL + "/auction/profiles/" + name;
    console.log(profileURL);
    const response = await fetch(profileURL ,{
        headers: headers()
    });
    const result = await response.json(); 
    
    return result
    
}




