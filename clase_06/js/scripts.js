let a = "1";
let b = 2;
//let c = true;

let arr = [1,3,"hola"];

//console.log(arr.length)
//alert(a);

let persona = {
    nombre: "Pedro",
    apellido: "Blanco",
    edad: 30,
    saluda: function(){
        alert('Hola soy Pedro')
    }
}

//alert(persona.edad);

// persona.saluda();


function suma(a,b){
    let c = 10;
    alert(a+b+c);
}


//suma(2,10);


let btn1 = document.getElementById('btn1');
let txt1 = document.getElementById('txt1');

// btn1.addEventListener('click',prueba);

// function prueba(){
//     alert('Hola muando')
// }

btn1.addEventListener('click', function(){
    let x = txt1.value;
    
    alert(x);
});

