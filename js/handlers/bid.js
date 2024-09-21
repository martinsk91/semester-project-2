import { placeBid } from "../listings/createbid.js";




export function addBidListener(listing){
    const form = document.querySelector("#bidform");
    const bidField = document.querySelector("#bidfield");
    const bidError = document.querySelector("#biderror");

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
       
        const bidValue = Number(bidField.value);
        const bidLength = listing.bids.length;
        const currentBid = listing.bids[bidLength - 1].amount
        console.log("bids", listing.bids[bidLength - 1].amount);
        if(typeof bidValue !== "number"  || bidValue < currentBid){
            bidError.innerText = "your bid have to a number, and have to be greater than the current bid";

        }
        else {
            placeBid(listing.id, bidValue)
            .then(()=> {
                window.location.reload();
            })
            
            
        }
        
        
        

    })
        
    
}