import { renderListings } from "./rendering/renderlistings.js";
import { renderTags } from "./rendering/rendertags.js";
import { renderCreateAuction } from "./rendering/modal/renderauctionform.js";
import { notLoggedIn } from "./rendering/modal/NotloggedIn.js";
import { addRegisterListener } from "./handlers/register.js";
// import { addLoginListener } from "./handlers/login.js";
import { checkUserLogin } from "./rendering/modal/checkuserlogin.js";
import { listings } from "./listings/get.js";
import { checkUser } from "./rendering/renderuser.js";
import { renderProfile } from "./rendering/renderprofile.js";
import { getUserListings } from "./listings/userlistings.js";

const allListings = listings.data;

const createAuctinButton = document.querySelector("#modal-button");
if(createAuctinButton){
createAuctinButton.addEventListener('click', checkUserLogin);
}
// createAuctinButton.addEventListener('click', notLoggedIn)

renderTags();
renderListings(allListings);
// renderCreateAuction();
// notLoggedIn();
checkUserLogin();
// localStorage.clear();

checkUser();
// hjibfasduifd@stud.noroff.no

renderProfile();


getUserListings();



