import { fetchToken } from "../api/auth/fetchtoken.js";
import * as variabels from "../api/variabels.js";

const method = "POST";

export async function createListing(listing) {
    const listingURL = variabels.API_URL + variabels.listingsURL;

    const response = await fetchToken(listingURL, {
        method,
        body:JSON.stringify(listing)
    })

    const result = await response.json();
    console.log(result);
    return result
    
}

