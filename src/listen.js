document.getElementById("choose").addEventListener("change",function(listen){
    if(listen.target.tagName == "SELECT"){
        let userSelect = document.getElementById("choose");
        let index = userSelect.selectedIndex;
        let chioceArea = document.getElementById('a');
        let childs = chioceArea.childNodes;
        for(let i = childs.length - 1; i >= 0; i--){
            chioceArea.removeChild(childs[i]);
        }
        readFile(userSelect.options[index].value);
    };
});
function getLib(){
    let userSelect = document.getElementById("choose");
    let index = userSelect.selectedIndex;
    setTimeout(()=>{
        readFile(userSelect.options[index].value);
    },900);
};