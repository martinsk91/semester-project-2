import { createListing } from "../listings/create.js";

export function addCreateListingListener(){
    const form = document.querySelector("#auctionform");
    if(form){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const tag = form.tag.value;
        const image = form.image.value;
        const endsAt = form.endsAt.value;

        const listing = {
            title: title,
            description: description,
            tags: [tag],
            media: [{
                url: image,
                alt: title
            }]
,
            endsAt: endsAt
        }
        createListing(listing)
        .then(() => {
            window.location.reload();
        })
    
        
    })
}

}
 