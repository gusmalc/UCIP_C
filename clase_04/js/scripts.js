let nombre = "Pedro";
let edad = "25";
let estudia = true;

const abc = 35;

nombre = "Juan";

//nombre = "Pedro";

console.log(nombre);
console.log(typeof edad);
console.log(typeof estudia);

//alert(nombre);

function saludar(p) {
    alert(p);
}


//saludar('Hola Mundo');

function suma(a,b){
    let c = a+b;
    alert(c);
}

let x = 3;
let y = 3;

//suma(x,y);


let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', ()=>{
    alert(nombre);
})