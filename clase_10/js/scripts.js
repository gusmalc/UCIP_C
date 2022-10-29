

function hace_algo(b,c){
    let a = b+c;
    alert(a);

}

function dame_algo(b,c){
    let a = b + c;
    return a;
}


let x = dame_algo(2,3);

// let mi_func = (a,b)=>{
//     return b + 2;
// };

// let mi_func = b=>{
//     return b + 2;
// };

// let mi_func = b => b + 2;

// let arr = [1,2,3];

// let txt = "Hola Mundo";

// function func_x(x){
//     let y = [...x];
//     y[0] = 8;
//     console.log(y);
// }




// func_x(arr);
// console.log(arr);

// function abc(x){
//     let y = [...x];
//     console.log(y);
// }


// abc('hola');

// function func_rojo(){
//     alert("Hola soy el otro rojo");
// }

let hijo = document.getElementById("hijo");

// hijo.addEventListener("click", ()=>{
//     alert("ok");
// });

// hijo.onclick = ()=>{
//     alert("ok2");
// }

// hijo.addEventListener("click", func_y);


// function func_y(){
//     alert("soy func y");
// }

let padre = document.getElementById("padre");

padre.addEventListener("click", (e) => {
    let el = e.target;
    //el.style.display = "none";
    //alert(e.target.id);
    if(el.dataset.tipo != "contenedor"){
        el.style.display = "none";
    }
});

let a = 1;
let b = "1";

