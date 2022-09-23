let btn_borrar = document.getElementById('btn_borrar');
let textusuario = document.getElementById('textusuario');
let resultado = document.getElementById('resultado');

btn_borrar.addEventListener('click', ()=>{
    textusuario.value = "";
    resultado.innerHTML = "";
    num = 0;
    txta = "";
} );

let num = 0;
let txta = "";
textusuario.addEventListener('input', ()=>{
    num++;
    if(num <= 10){
        let txt = textusuario.value;
        resultado.innerHTML = txt;
        txta = txt;
    }else{
        textusuario.value = txta;
        alert('Credito terminado');
    }




});




