import {API_URL, listingsURL} from '../api/variabels.js'; 


export async function getListings() {
    const listingURL = API_URL + listingsURL ;
    try {
        const response = await fetch(listingURL);

        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);  
        return result;
    } catch (error) {
        console.error("Error fetching listings:", error); 
        return null;  
    }
}

getListings();
