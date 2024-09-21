// import { API_URL } from "../api/variabels.js";
// import { placeBid } from "../listings/createbid.js";
import { addBidListener } from "../handlers/bid.js";



import { getSpecificListing } from "../listings/createid.js";




export async function renderSpecificListing(){
 
    const imageDiv = document.querySelector("#specificimgdiv");
    const heading = document.querySelector("#specificheading");
    const description = document.querySelector("#specificdescription");
    const image = document.createElement("img");
    const bid = document.querySelector("#currentbid");
    const form = document.querySelector("bidform");

    image.classList.add("card-img", "img-fluid");
    if(imageDiv && heading && description){
    const specificListing = await getSpecificListing();
    const specific = specificListing.data
    const bidLength = specific.bids.length;  

    
        if(specific.media && specific.media.length > 0){
            image.src = specific.media[0].url;
            image.alt = specific.media.alt;

        }
        heading.innerText = specific.title;
        description.innerText = specific.description;
        if(specific.bids.length > 0){

            bid.innerHTML = `current bid: <span class="text-danger">${specific.bids[bidLength - 1].amount}</span>`
        }
        else {
            bid.innerHTML = `current bid: 0`

        }
      addBidListener(specific);
   
        imageDiv.append(image)
        // getBidsForListing(specific.id)
        

        // placeBid(specific.id, 7);
    }


}









