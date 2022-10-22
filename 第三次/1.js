const inputs =document.querySelectorAll(".box");
const all = document.querySelector(".all");
const not = document.querySelector(".not");
const notAll = document.querySelector(".notall");

all.addEventListener('click',()=>{
    for(let i=0;i<inputs.length;i++){
        inputs[i].checked=true;
    }

},false)

not.addEventListener('click',()=>{
    for(let i=0;i<inputs.length;i++){
        inputs[i].checked=false;
    }

},false)

notAll.addEventListener('click',()=>{
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].checked==true){
            inputs[i].checked=false;
        }else if(inputs[i].checked==false){
            inputs[i].checked=true;
        }
    }
},false)