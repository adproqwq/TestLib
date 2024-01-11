var libList = ['yylj-offical'];
var libData = [];
axios.get('../lib/yylj-offical.json5').then(function(data){
  data = JSON5.stringify(data.data);
  libData.push(data);
});

function getJsonArrayLength(jsonArray){
  let length = 0;
  for(let i in jsonArray){
    length++;
  }
  return length;
};

function getQuestion(data){
  let chioceArea = document.getElementById('a');
  let dataLength = getJsonArrayLength(data.data);
  let randomQ = Math.round(Math.random()*dataLength);
  document.getElementById('q').innerText = data.data[randomQ].Q;
  let length = getJsonArrayLength(data.data[randomQ].choice);
  let randomPosition = Math.round(Math.random()*length);
  let j = 0;
  for(let i = 0; i <= length; i++){
    let btn = document.createElement('button');
    btn.setAttribute('id',`${i}`);
    btn.setAttribute('class','btn btn1');
    btn.setAttribute('type','button');
    btn.setAttribute('onclick',`judge(document.getElementById("choose").options[document.getElementById("choose").selectedIndex].value,${randomPosition},${i})`);
    chioceArea.appendChild(btn);
    btn = document.getElementById(`${i}`);
    if(i == randomPosition) btn.textContent = data.data[randomQ].A;
    else{
      btn.textContent = data.data[randomQ].choice[j];
      j++;
    }
  }
};

function readFile(libName){
  let libIndex = libList.indexOf(libName);
  let data = JSON5.parse(JSON5.parse(libData[libIndex]));
  document.getElementById('lib').innerText = `当前题库版本：${data.versionName}(${data.versionCode})`;
  getQuestion(data);
};

function judge(libName, correctAnswerLocation, index){
  let libIndex = libList.indexOf(libName);
  let data = JSON5.parse(JSON5.parse(libData[libIndex]));
  if(index == correctAnswerLocation){
    alert(data.prompt.correct);
    let chioceArea = document.getElementById('a');
    let childs = chioceArea.childNodes;
    for(let i = childs.length - 1; i >= 0; i--){
      chioceArea.removeChild(childs[i]);
    }
    getQuestion(data);
  }
  else alert(data.prompt.wrong);
};