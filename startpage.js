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


function printToDo() {
    if(checkSession() == true){
        let printToDoWrap = document.createElement("div")
        let main = document.getElementById("myMain")


        let mySavedObjects = localStorage.getItem("users")
        mySavedObjects = JSON.parse(mySavedObjects)

                                                            //inprogress, prinar ut vilken användare det än är. Misstänker att det bör lösas med en if sats
        for(i = 0; i < mySavedObjects.length; i++){         //som verifierar vilken användare som är inloggad
            mySavedPosts = mySavedObjects[i].post
            //Create an if on match between Session user and local user
            for(i = 0; i < mySavedPosts.length; i++){
                
                let printToDoTitle = document.createElement("h2")
                let printToDoDescription = document.createElement("p")

                printToDoTitle.innerText = mySavedPosts[i].toDoTitle
                printToDoDescription.innerText = mySavedPosts[i].toDoDescription
                
                main.appendChild(printToDoWrap)
                printToDoWrap.appendChild(printToDoTitle)
                printToDoWrap.appendChild(printToDoDescription)
                console.log(mySavedPosts[i].toDoTitle)
                
            }        
        }


        

    }

}










function createInputForm() {
    //Skapar knapp som funktion i funktion för att komma åt de values jag behöver för att "onClick" pusha nytt object till min localstorage
    function toDoButton() {
        let myButton = document.createElement("button")
        myButton.className = "toDoButton"
        myButton.innerText = "submit"        
        myButton.addEventListener("click", () => {
            let localArray = localStorage.getItem("users")
            let activeUser = sessionStorage.getItem("user")
            localArray = JSON.parse(localArray)
                                                            //Nära lösning(problem löst), kan lägga till ett object i en array men efter det stör den ut inlogg och regg,
                                                            // Problemet var att min nya post pushades som object och ersatte min array.
              for(i = 0; i < localArray.length; i++){       // Löste genom att pusha mitt object till array och sen setItem "array". Låter tankar stå kvar för framtiden
                if(activeUser == localArray[i].name){  
                let postToSave = localArray[i]      
                postToSave.post.push({
                    toDoTitle: inputToDoTitle.value,
                    toDoDescription: inputToDoDescription.value
                })
                localStorage.setItem("users", JSON.stringify(localArray))
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


printToDo()
