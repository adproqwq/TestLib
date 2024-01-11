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
    setTimeout(()=>{
        readFile(userSelect.options[index].value);
    },500);
};