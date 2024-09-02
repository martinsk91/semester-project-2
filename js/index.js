import { renderListings } from "./rendering/renderlistings.js";
import { renderTags } from "./rendering/rendertags.js";
import { renderCreateAuction } from "./rendering/modal/renderauctionform.js";
import { notLoggedIn } from "./rendering/modal/NotloggedIn.js";

const createAuctinButton = document.querySelector("#modal-button");
createAuctinButton.addEventListener('click', notLoggedIn)

renderTags();
renderListings();
// renderCreateAuction();
// notLoggedIn();
