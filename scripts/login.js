function ValidateLogin(){
    //Retrieve user input, non empty due to `required` attribute
    let pass = document.getElementById("fpassword").value;
    let user = document.getElementById("fusername").value;
    
    //Hard-coded usernames and passwords
    let loginData = new Map([
        ["admin","admin"],
        ["sudo","sudo"],
        ["super","base"]
    ])

    if(loginData.has(user) && loginData.get(user) === pass){
        return true;
    }
    
    //Check if user is registered 
    let registerData = new Map(JSON.parse(sessionStorage.getItem("registerData")));
    if(registerData.has(user) && registerData.get(user) === pass)return true;

    alert("Incorrect username or password");
    return false;
}