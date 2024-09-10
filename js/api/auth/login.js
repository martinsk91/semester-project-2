import * as variabels from "../variabels.js";
import { save } from "../../storage/save.js";


const path = "/auth/login";
const method = "POST";

export async function login(profile) {
    const loginURL = variabels.API_URL + path;
    const body = JSON.stringify(profile);

    try {
        const response = await fetch(loginURL, {
            headers: {
                "content-type": "application/json"
            },
            method,
            body
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const jsonResponse = await response.json();
        const { accessToken, ...user } = jsonResponse.data;
        console.log(user);
       

        save("token", accessToken);
        save("profile", user);
        
    } catch (error) {
        console.error("Login failed:", error);
    }
}




// hjibfasduifd@stud.noroff.no


