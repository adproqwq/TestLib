var getRanPos;
document.getElementById("choose").addEventListener("change",function(listen){
    if(listen.target.tagName == "SELECT"){
        let userSelect = document.getElementById("choose");
        let index = userSelect.selectedIndex;
        readFile(userSelect.options[index].value);
    };
});
function getLib(){
    let userSelect = document.getElementById("choose");
    let index = userSelect.selectedIndex;
    readFile(userSelect.options[index].value);
};
function resume(){
    eval(script);
    getRanPos = eval("redefine_" + getFileName + "();");
};