


import {API_URL, listingsURL} from '../api/variabels.js'; 

const listingURL = API_URL + listingsURL;


 export async function getListings(url) {
    
    try {
        const response = await fetch(url);

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

export const listings = await getListings(listingURL); 


