function getArti(){
    var userSelect = document.getElementById("choose");
    var index = userSelect.selectedIndex;
    if(userSelect.options[index].value == "yylj") yylj();
    else if(userSelect.options[index].value == "cs") cs();
};