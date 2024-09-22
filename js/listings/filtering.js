import { listings } from "./get.js";
// import { getListings } from "./get.js";
import { renderListings } from "../rendering/renderlistings.js";
export function addFiltering(tag) {
    const filteredListings = listings.data.filter(listing => {

        return listing.tags.includes(tag);
    });

    renderListings(filteredListings);
 
}