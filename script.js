
// Hämta och parsea localstorage      
function getUserList() {
    let userArray = localStorage.getItem("users")
    //Om localstorage är tom, skapa en array
    if(userArray == null) {
        userArray = []
    }
    //Om localStorage finns, hämta och omvandla
    else {
        userArray = JSON.parse(userArray)
    } 
    console.log(userArray, "getUserFunction")
    return userArray
}
//Spara array i localstorage
function saveArrayToLocal(arrayToLocal) {
    localStorage.setItem("users", JSON.stringify(arrayToLocal))
}
//Kollar om användar namnet redan finns och retunerar true eller false
function checkUser(nameToCheck, passwordToCheck) { 
    let myList = getUserList() 
    
    myListName = false
    for(i = 0; i < myList.length; i++){
        if(nameToCheck == myList[i].name && passwordToCheck == myList[i].password) {
            myListName = true
        }
    }
    return myListName
}
//Lägg till i array och skicka till localStorage
function addToArray() {
    let myArray = getUserList()
    let registerUserName = document.getElementById("registerUserName").value
    let registerPassword = document.getElementById("registerPassword").value
    console.log(myArray, "addToArrayFunction")
    myArray.push({
        name: registerUserName,
        password: registerPassword,
        post: []
    })
     saveArrayToLocal(myArray)
}
//Kör mina funktion onclick som lägger till ny användare  i localstorage
function addToArrayOnClick() {
    let registerButton = document.getElementById("registerButton")

    registerButton.addEventListener("click", () => {
        let registerUserName = document.getElementById("registerUserName").value
        checkUser(registerUserName)     
        //Använd funktion som kollar om användarnamnet redan finns, om sant meddela "user already exists"
        if(myListName == true){
            console.log("user already exists")
        }
        //Annars kör funktionen addToArray
        else {
            addToArray()   
        }    
    })
}

function login() {
    let loginButton = document.getElementById("loginButton")

    loginButton.addEventListener("click", () => {
        let userName = document.getElementById("userName").value
        let password = document.getElementById("password").value
        checkUser(userName, password)

        if(myListName == true){
            console.log("sant")
            sessionStorage.setItem("user", userName)
            window.location = "index.html"
        }
        else{
            console.log("falskt")
        }
    })


}




addToArrayOnClick()
login()

