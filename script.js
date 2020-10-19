
    
    

//Skapa login funktion som loopar igenom localstorage och letar efter match
function login() { 
    const userNameToCheck = document.getElementById("username").value
    const passwordToCheck = document.getElementById("password").value
}
//Registrera ny användare
function registerUser() {
    let registerUserName = document.getElementById("registerUserName")
    let registerPassword = document.getElementById("registerPassword")
    const registerButton = document.getElementById("registerButton")
    
    registerButton.addEventListener("click", function(){
        //hämta localstorage spara i userArray
        let userArray = localStorage.getItem("users")
        //Om localstorage är tom, skapa en array
        if(userArray == null) {
            userArray = []
        }
        //Om localStorage finns, hämta och omvandla
        else{
            userArray = JSON.parse(userArray)
        }
        // kolla om användar namnet finns i arrayen, om det finns logga "user name taken"(funkar inte)
        if(registerUserName.value == userArray.userName){ 
            console.log("user name taken")
        }
        //Om användar namnet inte finns, skapa ny användare och pusha i userArray
        else{
            userArray.push({
                userName: registerUserName.value,
                userPassword: registerPassword.value
            })
            localStorage.setItem("users", JSON.stringify(userArray))
        }
        //Skicka min userArray till localstorage och gör till string
        
        console.log(userArray)

    })
}

registerUser()