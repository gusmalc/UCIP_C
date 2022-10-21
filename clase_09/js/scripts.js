let a = 10;
const b = "Hola";

let colores = ["Rojo","Verde","Amarillo","Negro"];

//console.log(colores.length);
//console.log(colores[colores.length - 1]);



let aa = [];

let persona = {
    nombre: "Maria",
    edad: 25,
    direccion: {
        calle: "Luro",
        numero: 2000,
        ciudad: "Mar del Plata"
    } 
}

//console.log(arr);

// colores.forEach((d, i) => {
//     console.log(`${i} -- ${d}`);
// });

//console.log(persona.direccion.ciudad);
// let dame_valor = "nombre";


// console.log(persona[dame_valor]);

let arr_x = [2,3,[5,4,3],8];

//console.log(arr_x[2]);

// arr_x.forEach((d, i) => {
//     console.log(`${i} -- ${d}`);
// });

let el1 = document.getElementById("el1");
let el2 = document.querySelector("#el1>div");
let eles = document.querySelectorAll("#el1>div");

//console.log(el1.dataset.saludo);

//console.log(el2.innerHTML);

//console.log(eles[1].innerHTML);

let xx = el1.querySelector(".box");
let yy = document.querySelector("#el1>.box");

//console.log(xx.innerHTML);

function mi_func(){
    alert("Ahora si CAFE!!!");
};

let mi_func2 = function(){
    alert("Ahora si CAFE!!!");
}

mi_func2();
