import { listings } from "../listings/get.js";
export function renderListings(){
   console.log(listings.data[8]);
    const listingsContainer = 
    document.querySelector("#listingscontainer");
  if(listingsContainer){
    listings.data.forEach(listing => {
    const listingDiv = document.createElement("div");
    const imageCropperDiv = document.createElement("div");
    const listingImg = document.createElement("img");
        
       
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
        listingDiv.append(imageCropperDiv, title, descriptionInfo, description);
        listingsContainer.append(listingDiv);
     


        imageCropperDiv.classList.add("image-cropper");
        listingDiv.classList.add("col-12", "col-sm-6", "col-md-5", "col-lg-3", "bg-secondary", "shadow-lg", "rounded");
    listingImg.classList.add("w-100", "rounded", "p-3", "img-fluid");
    });

}
}






