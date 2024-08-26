import {API_URL, listingsURL} from '../api/variabels.js'; 


 async function getListings() {
    const listingURL = API_URL + listingsURL ;
    try {
        const response = await fetch(listingURL);

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

export const listings = await getListings(); 


