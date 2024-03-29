function ValidateRegister(){
    //Check if user typed the correct password twice
    let pass = document.getElementById("fpassword").value;
    if(pass != document.getElementById("fpasswordretype").value){
        alert("Passwords doesnt match");
        return false;
    }

    let response = IsPasswordStrong(pass);

    if(response === true){
        //register the user, saving it to local storage

        //Recover user name
        let userName = document.getElementById("fusername").value;

        //Recover saved registration data
        let registerData = new Map(JSON.parse(sessionStorage.getItem("registerData")));
        
        if(registerData.has(userName)){
            alert("User already exists");
            return false;
        }
        registerData.set(userName,pass);

        //Save changes to sessionStorage
        sessionStorage.setItem("registerData",JSON.stringify(Array.from(registerData.entries())));
        return true;
    }
    else{
        alert(response);
        return false;
    }
}
//Enforce several rules to consider a password strong.
//Returns true if the pasword is strong or a string with the message error if the password is not string
function IsPasswordStrong(password){
    if(password.length < 8)return "Password must have at least 8 characters but has " + password.length;
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;

    for (character of password){
        if('0' <= character && character<='9')hasNumber = true;
        else if('a' <= character && character<='z')hasLowercase = true;
        else if('A' <= character && character<='Z')hasUppercase = true;
    }
    
    if(!hasLowercase)return "Password must contain at least a lowercase letter";
    if(!hasUppercase)return "Password must contain at least an uppercase letter";
    if(!hasNumber)return "Password must contain at least a digit";
    return true;
}