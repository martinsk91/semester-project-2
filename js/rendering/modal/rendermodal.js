import { renderCreateAuction } from "./renderauctionform.js";


export function renderModal(){
    if (isLoggedin){
        renderCreateAuction();
    }

    else{
        renderNotLoggedin();
    }

}