
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
function checkUser() { 
    let myList = getUserList() 
    let nameToCheck = document.getElementById("registerUserName").value
    
    myListName = false
    for(i = 0; i < myList.length; i++){
        if(nameToCheck == myList[i].name) {
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
        password: registerPassword
    })
     saveArrayToLocal(myArray)
}
//Kör mina funktion onclick som lägger till ny användare  i localstorage
function addToArrayOnClick() {
    let registerButton = document.getElementById("registerButton")

    registerButton.addEventListener("click", () => {
        
        checkUser()
       
        if(myListName == true){
            console.log("user already exists")
        }
        else {
            addToArray()
            
        }

        
    })

}


addToArrayOnClick()


