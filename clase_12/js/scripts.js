let contenido = document.getElementById("contenido");
let app = document.getElementById("app");

let url = `contenido.html`;
    fetch(url)
    .then(res=> res.text() )
    .then(el =>{
       contenido.innerHTML = el;
    })
    .catch(err=>{
        console.log(err.message);
    });


let hh1 = document.createElement("h1");
hh1.innerHTML = "Soy el nuevo h1";
hh1.style.color = "#f00";

let hh2 = document.createElement("h1");
hh2.innerHTML = "Soy el segundo h1";


app.appendChild(hh1);
app.appendChild(hh2);