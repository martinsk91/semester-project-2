export function renderErrorMessage(){
    const error = document.querySelector("#error");
    error.innerText = "";
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Username or password was incorrect"
    error.append(errorMessage);

}

