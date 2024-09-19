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
   
    const listingsRow = document.createElement("div");
    listingsRow.classList.add("row", "gy-4"); 

    userlistingsData.forEach(listing => {
       
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-6", "col-lg-4"); 

        const dropDown = document.createElement("details");
        dropDown.classList.add("mb-3");

        const summary = document.createElement("summary");
        summary.classList.add("fs-5");
        summary.innerText = listing.title;

        const link = document.createElement("a");
        link.href = "#"; 

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("d-flex", "flex-column", "align-items-center");

        const image = document.createElement("img");
        image.classList.add("img-fluid", "mb-2");

        if (listing.media && listing.media.length > 0) {
            image.src = listing.media[0].url;
            image.alt = listing.media[0].alt;
        } 

        const description = document.createElement("p");
        description.classList.add("text-center");
        description.innerText = listing.description;

        
        contentDiv.append(image, description);
        link.append(contentDiv);
        dropDown.append(summary, link);
        col.append(dropDown);
        listingsRow.append(col);
    });

   
    myListings.append(listingsRow);
}

}


}









// /auction/profiles/<name>/listings