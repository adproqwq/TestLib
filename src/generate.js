var getTitle, getAuthor, getVersion, getDiscription, getFileName, getCorrectAlert, getWrongAlert, getQ, getA;
var json;
function generate(i){
    //获取信息
    getTitle = document.getElementById("title").value;
    getAuthor = document.getElementById("author").value;
    getVersion = document.getElementById("version").value;
    getDiscription = document.getElementById("description").value;
    getFileName = document.getElementById("fileName").value;
    getCorrectAlert = document.getElementById("correct").value;
    getWrongAlert = document.getElementById("wrong").value;
    getQ = "'";
    getA = "'";
    for(var j = 0;j < i;j++){
        getQ = getQ + document.getElementById("Q" + String(j + 1)).value + "','";
        getA = getA + document.getElementById("A" + String(j + 1)).value + "','";
    }
    getQ = getQ.substring(0,getQ.length - 1);
    getA = getA.substring(0,getA.length - 1);
};
function test(i){
    window.open(encodeURI('./index.html?' + '?title=' + getTitle + '?author=' + getAuthor + '?version=' + getVersion + '?desc=' + getDiscription + '?fileName=' + getFileName + '?c=' + getCorrectAlert + '?w=' + getWrongAlert + '?q=' + getQ + '?a=' + getA + '?i=' + String(i))); 
};
function save(){
    console.log(json);
    navigator.clipboard.writeText('https://testlib.adproqwq.xyz/index.html?json=' + json + '?title=' + getTitle + '?author=' + getAuthor + '?version=' + getVersion + '?desc=' + getDiscription + '?fileName=' + getFileName + '?c=' + getCorrectAlert + '?w=' + getWrongAlert + '?q=' + getQ + '?a=' + getA + '?i=' + String(i)).then(() => {
        alert('已复制到剪切板，分享题库时发送该链接即可。');
    });
};