import { notLoggedIn } from "./NotloggedIn.js";
import { renderCreateAuction } from "./renderauctionform.js";
import { load } from "../../storage/load.js";
import { addCreateListingListener } from "../../handlers/create.js";


export function checkUserLogin(){
    const token = load("token");
    if(token){
        renderCreateAuction();
        addCreateListingListener();
    
    }

    else {
        notLoggedIn();
    }

}