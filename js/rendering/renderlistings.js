import { listings } from "../listings/get.js";
export function renderListings(){
    console.log(listings.data[1].media[0].url)
    const listingsContainer = 
    document.querySelector("#listingscontainer");
    console.log(listings.data);
    listings.data.forEach(listing => {
    const listingDiv = document.createElement("div");
    const listingImg = document.createElement("img");
        
       
        if (listing.media && listing.media.length > 0) {
            listingImg.src = listing.media[0].url;
            listingImg.alt = listing.title;
        }
        
       
        const title = document.createElement("h2");
        title.innerText = listing.title;
        
        const description = document.createElement("p");
        description.innerText = listing.description;
        
        listingDiv.append(listingImg, title, description);
        listingsContainer.append(listingDiv);
        
        listingDiv.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "bg-secondary", "shadow-lg");
        listingImg.classList.add("w-100", "rounded", "p-3", "img-fluid");
    });


}






