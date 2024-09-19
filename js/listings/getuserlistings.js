import { headers } from "../api/auth/fetchtoken.js";


export async function getUserListingsFetch(url) {
    
    

    try {
        const response = await fetch(url, {
          headers: headers()
        })

        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
          
        return result;
    } catch (error) {
        console.error("Error fetching listings:", error); 
        return null;  
    }
}