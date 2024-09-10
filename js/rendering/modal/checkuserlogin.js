import { notLoggedIn } from "./NotloggedIn.js";
import { renderCreateAuction } from "./renderauctionform.js";
import { load } from "../../storage/load.js";


export function checkUserLogin(){
    const token = load("token");
    console.log(token);
    if(token){
        renderCreateAuction();
    }

    else {
        notLoggedIn();
    }

}