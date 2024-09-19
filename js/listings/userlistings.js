import { load } from "../storage/load.js";
import * as variabels from "../api/variabels.js";
// import { headers } from "../api/auth/fetchtoken.js";
import { getUserListingsFetch } from "./getuserlistings.js";

export async function getUserListings(){



const token = load("token");
if(token){
const profile = load("profile") ;
const {name} = profile;



const userListingsURL = variabels.API_URL +
 variabels.auction + variabels.profilesURL + "/" +
  name + variabels.listing;

const userlistings = await getUserListingsFetch(userListingsURL);
const userlistingsData = userlistings.data;
console.log(userlistingsData);
const myListings = document.querySelector("#listings");
// if(myListings){
// userlistingsData.forEach(listing => {
//     const dropDown = document.createElement("details");
//     dropDown.classList.add("mb-3");

//     const summary = document.createElement("summary");
//     summary.classList.add("fs-5");
//     summary.innerText = listing.title;

//     const link = document.createElement("a");
//     link.href = ""
//     const contentDiv = document.createElement("div");
//     contentDiv.classList.add("d-flex", "flex-column", "align-items-center");
//     const image = document.createElement("img");
//     image.classList.add("img-fluid", "mb-2")
//     console.log();

//     if(listing.media && listing.media.length > 0){
//     image.src = listing.media[0].url;
//     image.alt = listing.media[0].alt;

//     }
  
//     image.classList.add("w-100");
//     const description = document.createElement("p");
//     description.innerText = listing.description
    


//     myListings.append(dropDown);
//     dropDown.append(summary, link);
//     // content.append(link);
//     link.append(contentDiv);
//     contentDiv.append(image, description);
  



    
// });
 

// }

if (myListings) {
    // Create a Bootstrap row for the grid
    const listingsRow = document.createElement("div");
    listingsRow.classList.add("row", "gy-4"); // 'gy-4' adds vertical gutter between rows

    userlistingsData.forEach(listing => {
        // Create a Bootstrap column
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-6", "col-lg-4"); // Responsive column size

        const dropDown = document.createElement("details");
        dropDown.classList.add("mb-3");

        const summary = document.createElement("summary");
        summary.classList.add("fs-5");
        summary.innerText = listing.title;

        const link = document.createElement("a");
        link.href = "#"; // Placeholder, you can add actual links here

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("d-flex", "flex-column", "align-items-center");

        const image = document.createElement("img");
        image.classList.add("img-fluid", "mb-2");

        if (listing.media && listing.media.length > 0) {
            image.src = listing.media[0].url;
            image.alt = listing.media[0].alt;
        } else {
            image.src = "/images/default-image.png"; // Fallback image if none is provided
            image.alt = "Default Image";
        }

        const description = document.createElement("p");
        description.classList.add("text-center");
        description.innerText = listing.description;

        // Append elements to create the full structure using `append`
        contentDiv.append(image, description);
        link.append(contentDiv);
        dropDown.append(summary, link);
        col.append(dropDown);
        listingsRow.append(col);
    });

    // Append the created row to the listings container
    myListings.append(listingsRow);
}

}


}









// /auction/profiles/<name>/listings