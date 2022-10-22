
let min = 0; // incluido
let max = 256; // excluido

let a = Math.floor(Math.random() * (max - min)) + min;
let b = Math.floor(Math.random() * (max - min)) + min;
let c = Math.floor(Math.random() * (max - min)) + min;

//document.body.style.background = `rgb(${a},${b},${c})`;

// setTimeout(function(){
//     alert('ok');
// },4000);

// let txt1 = document.getElementById("txt1");
// let text = "Es viernes y el cuerpo lo sabe";
// let arr_txt = text.split(" ");
// let texto_final = "";
// let nint = 0;
// let inter = setInterval(function(){
//     texto_final += arr_txt[nint] + " ";    
//     txt1.innerHTML = texto_final;
//     nint++;
//     if(nint==arr_txt.length){
//         clearInterval(inter);
//         nint = 0;
//     }
// }, 300);

let txt1 = document.getElementById("txt1");
txt1.style.color = `rgb(${a},${b},${c})`;
let text = "Es viernes y el cuerpo lo sabe";

let arr_txt = [...text];
let texto_final = "";
let nint = 0;
let inter = setInterval(function(){
    texto_final += arr_txt[nint];    
    txt1.innerHTML = texto_final;
    nint++;
    if(nint==arr_txt.length){
        clearInterval(inter);
        nint = 0;
    }
}, 100);