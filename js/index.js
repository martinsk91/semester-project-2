import { renderListings } from "./rendering/renderlistings.js";
import { renderTags } from "./rendering/rendertags.js";
import { renderCreateAuction } from "./rendering/renderauctionform.js";
import { notLoggedIn } from "./rendering/NotloggedIn.js";


renderTags();
renderListings();
// renderCreateAuction();
notLoggedIn();
