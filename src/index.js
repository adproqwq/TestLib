var libList = ['yylj-offical'];
var libData = [];
axios.get('../lib/yylj-offical.json5').then(function(data){
  data = JSON5.stringify(data.data);
  libData.push(data);
});

function readFile(libName){
  let libIndex = libList.indexOf(libName);
  let data = JSON5.parse(libData[libIndex]);
  document.getElementById('lib').innerText = '当前题库版本：' + data.versionName;
};