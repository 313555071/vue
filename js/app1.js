//数据模型
var msg="msg变量";
//数据视图模型view-modle
var h4dom=document.getElementById("h1Dom");
h4dom.innerHTML=msg;
var inputdom=document.getElementById("inputDom");
inputdom.value=msg;
inputdom.addEventListener("input",function(){
    console.log();
    msg=inputdom.value;
    h4dom.innerHTML=msg;
})