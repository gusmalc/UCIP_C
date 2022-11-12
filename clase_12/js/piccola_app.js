let btn1 = document.getElementById("btn1");
let texto = document.getElementById("texto");
let lista = document.getElementById("lista");
let frm = document.getElementById("frm");



btn1.onclick = () => {
    let t = texto.value;
    if(t != ""){
        let li = document.createElement('li');
        li.innerHTML = t;
        lista.appendChild(li); 
        //texto.value = "";
        frm.reset();
    }
}