//Handles searching on index.html
function RefreshSearch(){
    //Define (platform,game) -> Collection  relations
    // Platforms : party, match , stream
    // Game : cod, wah, wow
    let relation = new Map([
        [ "partycod",["Out1","Out2","Out3"] ],
        [ "partywah",["Out4","Out5","Out6","Out7"] ],
        [ "partywow", ["Out8","Out9"] ],

        [ "matchcod",["Out10","Out11"] ],
        [ "matchwah",["Out12","Out13","Out14","Out15","Out16"] ],
        [ "matchwow",["Out17"] ],

        [ "streamscod",["Out18","Out19"] ],
        [ "streamswah",["Out20","Out21","Out22"] ],
        [ "streamswow",["Out23"] ]
    ])

    //Retrieve the results associated with the search
    let searchData = relation.get(GetSelectedPlatform()+GetSelectedGame());
    
    //Retrieve the HTML element that will display the results
    let searchResultElement = document.getElementById("search-result-list");
    // Remove its child elements
    //searchResultElement.replaceChildren();//doesnt work on my Edge
    while(searchResultElement.firstChild){
        searchResultElement.removeChild(searchResultElement.lastChild);
    }
    
    //Assign it new child with the fresh content. 
    for(let i =0;i<searchData.length;++i){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(searchData[i]));
        searchResultElement.appendChild(li);
    }
}
function GetSelectedPlatform(){
    //Retrieve the platform radio buttons
    let platforms = document.getElementsByName("platform-selector");

    //Return the value of the selected radio button
    for (radioButton of platforms){
        if(radioButton.checked){
            return radioButton.value;
        }
    }
}
function GetSelectedGame(){
    //Retrieve the game options
    let games = document.getElementsByName("game-selector");

    //Return the value of the selected option
    for (option of games){
        if(option.selected){
            return option.value;
        }
    }
}