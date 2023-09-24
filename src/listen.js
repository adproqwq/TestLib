document.getElementById("choose").addEventListener("change",function(listen){
    if(listen.target.tagName == "SELECT"){
        var userSelect = document.getElementById("choose");
        var index = userSelect.selectedIndex;
        console.log("change");
        if(userSelect.options[index].value == "yylj") redefine_yylj();
        else if(userSelect.options[index].value == "cs") redefine_cs();
    };
});
function getArti(){
    var userSelect = document.getElementById("choose");
    var index = userSelect.selectedIndex;
    if(userSelect.options[index].value == "yylj") redefine_yylj();
    else if(userSelect.options[index].value == "cs") redefine_cs();
};