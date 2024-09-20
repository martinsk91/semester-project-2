// import { API_URL } from "../api/variabels.js";

// export async function fetchId(){
//     const queryString = document.location.search;

//     const params = new URLSearchParams(queryString);
    
//     const id = params.get("id");
//     return id;

     
// }

// const id = await fetchId();

// const idURL = API_URL + "/" + id;

// async function fetchListing() {
//     try{
//         const response = await fetch(idURL);

//         if (!response.ok) {  
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();

//         return result
//     }
//     catch(error){
//         console.error("error fetching id", error);
//         return null
//     }

    
// }

// export const specificListing = await fetchListing();



import { API_URL, listing, auction } from "../api/variabels.js";



export function fetchId() {
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);
    
    const id = params.get("id");
    return id;
}

async function fetchListing() {
    const id = fetchId();
    const idURL = API_URL + auction + listing + "/" + id;

    try {
        const response = await fetch(idURL);

        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result;
    } catch (error) {
        console.error("error fetching id", error);
        return null;
    }
}


export async function getSpecificListing() {
    return await fetchListing();
}