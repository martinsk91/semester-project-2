// import { listings } from "../listings/get.js";
// export function renderListings(list){
// //    console.log(listings.data[8]);
//     const listingsContainer = 
//     document.querySelector("#listingscontainer");
//   if(listingsContainer){
//     list.data.forEach(listing => {
//     const listingDiv = document.createElement("div");
//     const imageCropperDiv = document.createElement("div");
//     const listingImg = document.createElement("img");
        
       
//         if (listing.media && listing.media.length > 0) {
//             listingImg.src = listing.media[0].url;
//             listingImg.alt = listing.title;
//         }
        
       
//         const title = document.createElement("h2");
//         title.innerText = listing.title;
//         const descriptionInfo = document.createElement("h3");
//         descriptionInfo.innerText = "Description:";
//         const description = document.createElement("p");
//         description.innerText = listing.description;
        
//         imageCropperDiv.append(listingImg);
//         listingDiv.append(imageCropperDiv, title, descriptionInfo, description);
//         listingsContainer.append(listingDiv);
     


//         imageCropperDiv.classList.add("image-cropper");
//         listingDiv.classList.add("col-12", "col-sm-6", "col-md-5", "col-lg-3", "bg-secondary", "shadow-lg", "rounded");
//     listingImg.classList.add("w-100", "rounded", "p-3", "img-fluid");
//     });

// }
// }

export function renderListings(list){
    const listingsContainer = document.querySelector("#listingscontainer");
  
    if (listingsContainer) {
        listingsContainer.innerHTML = "";  // Clear previous listings

        
        // const listings = list.data ? list.data : list;
    
    if(list.length > 0){
        list.forEach(listing => {
       

            const listingDiv = document.createElement("div");
            const imageCropperDiv = document.createElement("div");
            const listingImg = document.createElement("img");


            if (listing.media && listing.media.length > 0) {
                listingImg.src = listing.media[0].url; 
                listingImg.alt = listing.title;
                // console.log(listing);
                console.log(listing.media[0]);
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

    else {
        listingsContainer.innerHTML = `<p class="text-center text-danger">no auctions in the selected category</p>`
    }
    }
}






