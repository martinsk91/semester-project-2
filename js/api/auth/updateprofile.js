import { API_URL } from "../variabels.js";
import { headers } from "./fetchtoken.js";
const path = "/auction/profiles";
const method = "PUT";

export async function updateAvatar(name, url) {
   
    const updateURL = `${API_URL}${path}/${name}`;
    console.log("Request URL:", updateURL);

  
    const body = JSON.stringify({
        avatar: {
            url: url
        }
    });

    try {
        const response = await fetch(updateURL, {
            headers: headers(),  
            method,  
            body    
        });

       
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Avatar updated successfully:", result);
    } catch (error) {
        console.error("Failed to update avatar:", error);
    }
}
