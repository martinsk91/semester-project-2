import { renderListings } from "./rendering/renderlistings.js";
import { renderTags } from "./rendering/rendertags.js";
import { checkUserLogin } from "./rendering/modal/checkuserlogin.js";
import { listings } from "./listings/get.js";
import { checkUser } from "./rendering/renderuser.js";
import { renderProfile } from "./rendering/renderprofile.js";
import { getUserListings } from "./listings/userlistings.js";


import { renderSpecificListing } from "./rendering/renderspecific.js";











export const allListings = listings.data;

const createAuctinButton = document.querySelector("#modal-button");
if(createAuctinButton){
createAuctinButton.addEventListener('click', checkUserLogin);
}
renderTags();
renderListings(allListings);
checkUserLogin();
checkUser();
// hjibfasduifd@stud.noroff.no
renderProfile();
getUserListings();
renderSpecificListing();







