/*
除引号内的文字可修改外，其它禁止修改，除非你能看得懂代码！！！
文件名请尽量与篇目名（即title）拼音首字母一样，文件名与很多东西有关！
*/

/*基础信息，引号里面都能改*/
var title = "岳阳楼记";  /*篇目名称，必填*/
var writer = "范仲淹";  /*篇目作者，必填*/
var author = "Adpro";  /*代码作者*/
var description = "注释来自人教版九年级上册语文书课文《岳阳楼记》";  /*描述*/

/*一个文言字词对应一个注释，请务必保持Q与A数量一致且一一对应，文字一定要用引号括起来*/
/*为保证代码美观性和高可读性，推荐每一项之间换行*/
var Q = [];
var A = [];
function redefine_yylj/*yylj必须更改为文件名*/(){
    Q = [
        "谪守",
        "越",
        "政通人和",
        "具",
        "制",
        "属",
    ];  /*文言字词，不能为空*/
    A = [
        "因罪贬谪流放，出任外官",
        "到",
        "政事顺利，百姓和乐",
        "同“俱”，全、皆",
        "规模",
        "同“嘱”，嘱托",
    ];  /*注释，不得为空*/
    yylj();/*yylj改成文件名*/
};

/*下面所有东西除特别说明外禁止改动！*/
var getQue, ranPos;
var cho = [];
var backup = [];
function yylj/*这里与文件名要相同*/(){
    getQue = Math.floor(Math.random()*Q.length);
    cho = [];
    backup = [...A];/*backup深度拷贝A，将buckup独立于A*/
    for(var i = 0;i < 4;i++){
        var getRanNum = Math.floor(Math.random()*backup.length);
        cho[i] = backup[getRanNum];
        backup.splice(getRanNum,1);
    }
    if(cho.lastIndexOf(A[getQue]) == -1){
        ranPos = Math.floor(Math.random()*4);
        cho[ranPos] = A[getQue];
    }
    else ranPos = cho.lastIndexOf(A[getQue]);
    document.getElementById("q").innerHTML = Q[getQue];
    document.getElementById("c0").textContent = cho[0];
    document.getElementById("c1").textContent = cho[1];
    document.getElementById("c2").textContent = cho[2];
    document.getElementById("c3").textContent = cho[3];
};

function yylj_judge/*yylj也要改成文件名*/(button){
    if(button == ranPos){
        alert("正确！");
        yylj()/*与文件名相同*/;
    }
    else alert("错误！");
};