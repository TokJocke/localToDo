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
//change content of login button
function buttonText() {
    if(checkSession() == true){
        loginOrOut.innerText = "Logga ut"
    }
    else{
        loginOrOut.innerText ="Logga in"
    }
}
//Dynamisk funktion bereonde på om användare är inloggad eller inte
function loginOrLogout() {
    let loginOrOut = document.getElementById("loginOrOut")
    

    if(checkSession() == true){
        
        console.log("du är inloggad")
        buttonText()
        createInputForm()
        loginOrOut.addEventListener("click", () => {
            sessionStorage.clear()
            loginOrLogout()
            location.reload()
        })
        
    }
    else {
        buttonText()
        loginOrOut.addEventListener("click", () => {
            window.location = "login.html"
        })
    }
}














function createInputForm() {
    //Create a button(inprogress create onclick function that save avlues in localstorage)
    function toDoButton() {
        let myButton = document.createElement("button")
        myButton.className = "toDoButton"
        myButton.innerText = "submit"
        
        myButton.addEventListener("click", () => {
            let localArray = localStorage.getItem("users")
            let activeUser = sessionStorage.getItem("user")
            localArray = JSON.parse(localArray)
                                                            //Nära lösning, kan lägga till ett object i en array men efter det stör den ut inlogg och regg,
                                                            // kan dessutom inte lägga till en post igen. ****När post pushas tas alla användare bort utan den aktuella*****
              for(i = 0; i < localArray.length; i++){       // Problem identifierar som när min post pushas görs keyn om från array till object.    
                if(activeUser == localArray[i].name){  
                let postToSave = localArray[i]
                
                console.log(postToSave)
                    
                postToSave.post.push({
                    toDoTitle: inputToDoTitle.value
                })

                localStorage.setItem("users", JSON.stringify(localArray))

 
                console.log("my posts ", localArray[i].post)
                console.log("username", localArray[i].name) 
                }
             } 
        }) 
        
        return myButton
    } 
    
    //create html and save "main" variable
    let main = document.getElementById("myMain")
    let toDoWrap = document.createElement("div")
    let inputToDoTitle = document.createElement("input")
    let inputToDoDescription = document.createElement("input")
    //properties for create elements
    inputToDoTitle.placeholder = "Title"
    inputToDoTitle.className = "toDoInput"
    inputToDoDescription.placeholder ="description"
    inputToDoDescription.className = "toDoInput"
    toDoWrap.className = "toDoWrap"
    
    
    //make my content visisble   

    main.appendChild(toDoWrap)
    toDoWrap.appendChild(inputToDoTitle)
    toDoWrap.appendChild(inputToDoDescription)
    toDoWrap.appendChild(toDoButton())
 }





loginOrLogout()