import {tags} from "../variabels/tags.js"

export function renderTags(){
 const tagContainer = document.querySelector("#tagcontainer");
 if(tagContainer){
 tags.forEach(tag=> {
 const tagDiv = document.createElement("div");
 const button = document.createElement("button");
 tagDiv.classList.add("col-6", "col-sm-4", "col-md-3", "col-lg-2");
 button.classList.add("btn", "btn-link", "text-info", "w-100");
    tagContainer.append(tagDiv);
    tagDiv.append(button);
    button.innerText = tag;
 })

}
}


