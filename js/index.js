import { renderListings } from "./rendering/renderlistings.js";
import { renderTags } from "./rendering/rendertags.js";
import { renderCreateAuction } from "./rendering/modal/renderauctionform.js";
import { notLoggedIn } from "./rendering/modal/NotloggedIn.js";
import { addRegisterListener } from "./handlers/register.js";
// import { addLoginListener } from "./handlers/login.js";
import { checkUserLogin } from "./rendering/modal/checkuserlogin.js";

const createAuctinButton = document.querySelector("#modal-button");
// createAuctinButton.addEventListener('click', notLoggedIn)

renderTags();
renderListings();
// renderCreateAuction();
// notLoggedIn();
checkUserLogin();
localStorage.clear();


// hjibfasduifd@stud.noroff.no


