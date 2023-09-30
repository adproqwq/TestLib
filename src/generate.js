var getTitle, getAuthor, getVersion, getDiscription, getFileName, getCorrectAlert, getWrongAlert, getQ,getA;
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
    console.log(getQ,getA);
    //拼接
    var json = `var title = "${getTitle}";var author = "${getAuthor}";var version = "${getVersion}";var description = "${getDiscription}";var Q = [];var A = [];function redefine_${getFileName}(){Q = [${getQ}];A = [${getA}];return ${getFileName}();};var getQue, ranPos;var cho = [];var backup = [];function ${getFileName}(){getQue = Math.floor(Math.random()*Q.length);cho = [];backup = [...A];for(var i = 0;i < 4;i++){var getRanNum = Math.floor(Math.random()*backup.length);cho[i] = backup[getRanNum];backup.splice(getRanNum,1);}if(cho.lastIndexOf(A[getQue]) == -1){ranPos = Math.floor(Math.random()*4);cho[ranPos] = A[getQue];}else ranPos = cho.lastIndexOf(A[getQue]);if(version == "") document.getElementById("lib").innerHTML = "当前题库版本：1.0.0";else document.getElementById("lib").innerHTML = "当前题库版本：" + version;document.getElementById("q").innerHTML = Q[getQue];document.getElementById("c0").textContent = cho[0];document.getElementById("c1").textContent = cho[1];document.getElementById("c2").textContent = cho[2];document.getElementById("c3").textContent = cho[3];return ranPos;};function ${getFileName}_judge(button,ranPos){if(button == ranPos){alert("${getCorrectAlert}");return "correct";}else alert("${getWrongAlert}");};`;
    window.open(encodeURI('./index.html?' + 'json=' + json + '?title=' + getTitle + '?version=' + getVersion + '?fileName=' + getFileName));
};