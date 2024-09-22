

import { newestFirst } from "../api/sort.js";
import { formatTime } from "../listings/formattime.js";


        
       


export function renderListings(list){
    newestFirst(list);
    
    const listingsContainer = document.querySelector("#listingscontainer");
  
    if (listingsContainer) {
        listingsContainer.innerHTML = ""; 

        
        
    
    if(list.length > 0){
        list.forEach(listing => {
            const formatedtime = formatTime(listing.endsAt);
            console.log(listing.endsAt);
       

            const link = document.createElement("a");
            link.href = `/listing/index.html?id=${listing.id}`;
            link.innerText = "see more";
            link.classList.add("text-info")
            const listingDiv = document.createElement("div");
            const imageCropperDiv = document.createElement("div");
            const listingImg = document.createElement("img");
            const date = document.createElement("p");
            date.innerText = formatedtime;


            if (listing.media && listing.media.length > 0) {
                listingImg.src = listing.media[0].url; 
                listingImg.alt = listing.title;
                
                
             } 
            

            const title = document.createElement("h2");
            title.innerText = listing.title;

            const descriptionInfo = document.createElement("h3");
            descriptionInfo.innerText = "Description:";

            const description = document.createElement("p");
            description.innerText = listing.description;

            imageCropperDiv.append(listingImg);
           
            
            listingDiv.append(imageCropperDiv, title, descriptionInfo, description, date, link);
            listingsContainer.append(listingDiv);

            imageCropperDiv.classList.add("image-cropper");
            listingDiv.classList.add("col-12", "col-sm-6", "col-md-5", "col-lg-3", "bg-secondary", "shadow-lg", "rounded");
            listingImg.classList.add("w-100", "rounded", "p-3", "img-fluid");
            
        });
    }

    else {
        listingsContainer.innerHTML = `<p class="text-center text-danger">no auctions in the selected category</p>`
    }
    }
}






