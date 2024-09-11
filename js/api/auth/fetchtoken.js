import { load } from "../../storage/load.js";
import { API_KEY } from "../variabels.js";

export function headers(){
    const token = load("token");
    return  {
        "content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY
    }
}

export async function fetchToken(url, options){
    return fetch(url, {
        ...options, 
        headers: headers()
    })

}