//Kollar om användare är inloggad eller ej
function checkSession() {
    let mySession = sessionStorage.getItem("user")

    if(mySession == null ){
        mySession = false
        console.log(" ingen session finns")
    }
    else{
        mySession = true
        console.log("du har en session")
    }
    return mySession
}
//Dynamisk funktion bereonde på om användare är inloggad eller inte
function loginOrLogout() {
    let loginOrOut = document.getElementById("loginOrOut")
    
    function buttonText() {
        if(checkSession() == true){
            loginOrOut.innerText = "Logga ut"
        }
        else{
            loginOrOut.innerText ="Logga in"
        }
    }

    if(checkSession() == true){
        
        console.log("du är inloggad")
        buttonText()
        createHtmlForLoggedIn()
        loginOrOut.addEventListener("click", () => {
            sessionStorage.clear()
            loginOrLogout()
            createHtmlForLoggedIn()
        })
        
    }
    else {
        buttonText()
        loginOrOut.addEventListener("click", () => {
            window.location = "login.html"
        })
    }
}
//Skapa alla element som ska finnas när användare är inloggad
function createHtmlForLoggedIn() {
    //Skapa en dynamisk titel som lägger sig i Headern
    function loggedInTitle() {
        let myHeader = document.getElementById("myHeader")
        let pageTitle = document.getElementById("pageTitle")
        let loggedInTitle = document.createElement("p")
        loggedInTitle.className = "loggedInTitle"
        loggedInTitle.innerText = "inloggad som" + " " + sessionStorage.user
        
        myHeader.insertBefore(loggedInTitle, pageTitle);
        return loggedInTitle
    }
    //Skapa en container som wrappar alla mina toDo element
    function createLoggedInWrap() {
        let main = document.getElementById("myMain")
        toDoWrap = document.createElement("div")
        toDoWrap.className = "toDoWrap"
        main.appendChild(toDoWrap)
      
        return toDoWrap
    }
    //Skapa en titel input för todo
    function createInputTitle() {
        let inputToDoTitle = document.createElement("input")
        inputToDoTitle.className = "toDoInput"
        inputToDoTitle.id = "inputToDoName"
        inputToDoTitle.placeholder = "Title"
        return inputToDoTitle
    }
    //skapa en description input för todo
    function createInputDescription() {
        let inputToDoDescription = document.createElement("input")
        inputToDoDescription.className = "toDoInput"
        inputToDoDescription.id = "inputToDoDescription"
        inputToDoDescription.placeholder ="description"
        return inputToDoDescription
    }
    //skapa en knapp för att submita todo
    function toDoButton() {
        let toDoButton = document.createElement("button")
        toDoButton.className = "toDoButton"
        toDoButton.innerText = "submit"
        return toDoButton
    }
    //Fäst eller ta bort mina element på min sida
    if(checkSession() == true){
        loggedInTitle()
        createLoggedInWrap()
    
        toDoWrap.appendChild(createInputTitle())
        toDoWrap.appendChild(createInputDescription())
        toDoWrap.appendChild(toDoButton()) 
    }
    else {
        
        toDoWrap.parentNode.removeChild(toDoWrap);
        
    }
    
}





loginOrLogout()