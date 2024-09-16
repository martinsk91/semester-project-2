import {tags} from "../variabels/tags.js"
// import { listings } from "../listings/get.js";
import { addFiltering } from "../listings/filtering.js";

export function renderTags(){
 const tagContainer = document.querySelector("#tagcontainer");
 if(tagContainer){
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


