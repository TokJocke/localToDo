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
        
        buttonText()
        console.log("du är inloggad")
        createHtmlForLoggedIn()
        loginOrOut.addEventListener("click", () => {
            sessionStorage.clear()
            loginOrLogout()
        })
        
    }
    else {
        buttonText()
        loginOrOut.addEventListener("click", () => {
            window.location = "login.html"
        })
    }
}

function createHtmlForLoggedIn() {

    function loggedInTitle() {
        let myHeader = document.getElementById("myHeader")
        let pageTitle = document.getElementById("pageTitle")
        let loggedInTitle = document.createElement("p")
        myHeader.insertBefore(loggedInTitle, pageTitle);
        
        loggedInTitle.className = "loggedInTitle"
        loggedInTitle.innerText = "inloggad som" + " " + sessionStorage.user
    }

    function createLoggedInWrap() {
        let main = document.getElementById("myMain")
        toDoWrap = document.createElement("div")
        toDoWrap.className = "toDoWrap"
        main.appendChild(toDoWrap)
      
        return toDoWrap
    }
    function createInputName() {
        let inputToDoName = document.createElement("input")
        inputToDoName.className = "toDoInput"
        return inputToDoName
    }
    function createInputDescription() {
        let inputToDoDescription = document.createElement("input")
        inputToDoDescription.className = "toDoInput"
        return inputToDoDescription
    }

    
    loggedInTitle()
    createLoggedInWrap()
    toDoWrap.appendChild(createInputName())
    toDoWrap.appendChild(createInputDescription())
    
    
}





loginOrLogout()