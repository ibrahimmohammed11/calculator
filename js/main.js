// let btns=document.querySelectorAll('.butt');
// let result=document.querySelector('.result');
// let del=document.querySelector('.red');
// let equal=document.querySelector('.green');

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click',function(e){
//        result.value+=e.target.value;
//     })
// }

// equal.onclick=function(){
//         if (result.value==='') {
//                 result.value==='';
//         } else {
//                 let value = eval(result.value);
//                 result.value=value;
//         }
// }

// del.addEventListener('click',function(){
//         result.value='';
// })

let btns = document.querySelectorAll(".butt");
let result = document.querySelector(".result");
let del = document.querySelector(".red");
let equal = document.querySelector(".green");

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function (e) {
    result.value += e.target.value;
  };
}

equal.onclick = function () {
  if (result.value === "") {
    result.value = "";
  } else {
    result.value = eval(result.value);
  }
};
del.onclick = function () {
  result.value = "";
};
