import {tags} from "../variabels/tags.js"
// import { listings } from "../listings/get.js";
import { addFiltering } from "../listings/filtering.js";
import { renderListings } from "./renderlistings.js";
import { allListings } from "../index.js";


export function renderTags(){
 const tagContainer = document.querySelector("#tagcontainer");
 if(tagContainer){
   
   const allAuctions = document.createElement("button");
   allAuctions.innerText = "All Auctions";
   allAuctions.classList.add("col-6", "col-sm-4", "col-md-3", "col-lg-2", "btn", "text-info");
   allAuctions.addEventListener('click', () => renderListings(allListings));
   tagContainer.append(allAuctions);
   tags.forEach(tag=> {
      const tagDiv = document.createElement("div");
      
 const button = document.createElement("button");
 tagDiv.classList.add("col-6", "col-sm-4", "col-md-3", "col-lg-2");
 button.classList.add("btn", "text-info", "w-100");
    tagContainer.append(tagDiv);
    tagDiv.append(button);
    button.innerText = tag;
    button.addEventListener('click', () => addFiltering(tag));
 })

}
}


