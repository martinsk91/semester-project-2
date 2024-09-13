import { tags } from "../../variabels/tags.js";
export function renderCreateAuction() {
    const modal = document.querySelector(".modal-body");
    modal.innerHTML = "";
   
    const form = document.createElement("form");
    form.setAttribute("id", "auctionform");

   
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-3");
    
    const labelForTitle = document.createElement("label");
    labelForTitle.setAttribute("for", "title");
    labelForTitle.textContent = "Title";
    
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("id", "title");
    title.classList.add("col-10", "rounded", "border", "border-info");
    
    titleDiv.append(labelForTitle, title);


    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-3");
    
    const labelForDescription = document.createElement("label");
    labelForDescription.setAttribute("for", "description");
    labelForDescription.textContent = "Description";
    
    const description = document.createElement("textarea");
    description.setAttribute("name", "description");
    description.setAttribute("id", "description");
    description.classList.add("col-10", "rounded", "border", "border-info");
    description.setAttribute("rows", "5"); 
    
    descriptionDiv.append(labelForDescription, description);

  
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-3");
    
    const labelForImg = document.createElement("label");
    labelForImg.setAttribute("for", "image");
    labelForImg.textContent = "Upload Image";
    
    const img = document.createElement("input");
    img.setAttribute("type", "text");
    img.setAttribute("name", "image");
    img.setAttribute("id", "image");
    img.classList.add("col-10", "rounded", "border", "border-info");
    
    imgDiv.append(labelForImg, img);

  
    const dateTimeDiv = document.createElement("div");
    dateTimeDiv.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-3");

    const labelForDateTime = document.createElement("label");
    labelForDateTime.setAttribute("for", "endsAt");
    labelForDateTime.textContent = "Select Date and Time";

    const dateTime = document.createElement("input");
    dateTime.setAttribute("type", "datetime-local");
    dateTime.setAttribute("id", "endsAt");
    dateTime.setAttribute("name", "endsAt");
    dateTime.classList.add("col-10", "rounded", "border", "border-info");

    dateTimeDiv.append(labelForDateTime, dateTime);

    const tagsDiv = document.createElement("div");
    tagsDiv.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-3");

    const labelForTags = document.createElement("label");
    labelForTags.setAttribute("for", "tag");
    labelForTags.textContent = "Category";

    const selectTags = document.createElement("select");
    selectTags.setAttribute("id", "tag");
    selectTags.setAttribute("name", "tag");
    selectTags.classList.add("col-10", "rounded", "border", "border-info");

  
    tags.forEach(tag => {
        const option = document.createElement("option");
        option.setAttribute("value", tag);
        option.textContent = tag;
        selectTags.appendChild(option);
    });

    tagsDiv.append(labelForTags, selectTags);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "mt-3");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("btn", "btn-success");
    submitButton.innerText = "Post"

    buttonDiv.append(submitButton);


    
    form.append(titleDiv, descriptionDiv, tagsDiv, imgDiv, dateTimeDiv, buttonDiv);
    modal.append(form);
}