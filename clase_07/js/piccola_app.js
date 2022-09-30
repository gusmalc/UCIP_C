let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let calculo = document.getElementById('calculo');
let resultado = document.getElementById('resultado');

calculo.addEventListener('change', ()=>{
   
   let x = calculo.value;
   let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
   if(num1.value != "" && num2.value != "" ){
    if(isNaN(n1) && isNaN(n2)){
        alert('Ingresar valores numericos')
        
    }else{
        switch (x) {
            case "1":
                suma();
                break;
            case "2":
                resta();
                break;
            case "3":
                divide();
                break;
            case "4":
                multiplica();
                break;
            case "0":
                borar();
                break;
        }
    }
    }else{
        alert('Ingresar valores');
    }
});

function suma(){
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let r = n1 + n2;
    resultado.innerHTML = r;
}
function resta(){
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let r = n1 - n2;
    resultado.innerHTML = r;
}
function divide(){
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let r = n1 / n2;
    resultado.innerHTML = r;
}
function multiplica(){
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let r = n1 * n2;
    resultado.innerHTML = r;
}

function borar(){
    num1.value = "";
    num2.value = "";
    resultado.innerHTML = "";
    
}