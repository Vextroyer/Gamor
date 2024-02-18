//Handles theme changes
function ToggleTheme(){
    let body = document.body;
    let oldClass = "";
    let newClass = "";
    if(body.className === "light-theme"){
        body.className = "dark-theme";
        //Find all elements who use light-secondary-background theme class
        //and set the to use dark-secondary-background theme class
        oldClass = "light-secondary-background";
        newClass = "dark-secondary-background";
        //change theme change icon from sun to moon
        document.getElementById("theme-change-icon").setAttribute("src","images/moon.png");
        
        document.getElementsByClassName("light-themed-register-button")[0].className = "dark-themed-register-button";
        document.getElementsByClassName("light-primary-color")[0].className = "dark-primary-color";
    }
    else{
        body.className = "light-theme";
        oldClass = "dark-secondary-background";
        newClass = "light-secondary-background";
        //change theme change icon from moon to sun
        document.getElementById("theme-change-icon").setAttribute("src","images/sun.svg");

        document.getElementsByClassName("dark-themed-register-button")[0].className = "light-themed-register-button";
        document.getElementsByClassName("dark-primary-color")[0].className = "light-primary-color";
    }

    //Replace class of all elements of oldClass with newClass
    let elements = document.getElementsByClassName(oldClass);
    while(elements[0]){
        elements[0].className = elements[0].className.replace(oldClass,newClass);
    }
    //If this works then , elements collection updates automatically on changes of its elements.
}