import * as variabels from "../variabels.js"
const path = "/auth/register";
const method = "POST";





export async function register(profile) {
    const registerURL = variabels.API_URL + path;
    console.log(registerURL);
    const body = JSON.stringify(profile);

    try {
        const response = await fetch(registerURL, {
            headers: {
                "content-type": "application/json"
            },
            method,
            body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Failed to register:", error);
    }
  
}




