import { remove } from "../../storage/remove.js";

export function logOut(){
    remove("token");
    remove("profile");
    window.location = '/';

}