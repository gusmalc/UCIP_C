let respuesta = document.getElementById("respuesta");


function carga_lista(){
fetch('https://jsonplaceholder.typicode.com/users/')
.then(res=>{ 
    
    return res.json()
})
.then(el =>{
    console.log(el);

    let codigo= `
    <table class="mitabla">
    <tr>
        <td>ID</td>
        <td>NOMBRE</td>
        <td>EMAIL</td>
        <td>TELEFONO</td>
    </tr>
    `;

    el.forEach((us) => {
        codigo += `
        <tr onclick="funx(${us.id})">
            <td>${us.id}</td>
            <td>${us.name}</td>
            <td>${us.email}</td>
            <td>${us.phone}</td>
        </tr>        
        `
    });

    codigo += "</table>";



    respuesta.innerHTML = codigo;
})
.catch(err=>{
    console.log(err.message);
});
}
carga_lista();

function funx(i){
    //alert(i);
    let url = `https://jsonplaceholder.typicode.com/users/${i}`;
    fetch(url)
    .then(res=> res.json() )
    .then(el =>{
        let usr = `
        <button onclick="carga_lista()">CARGAR LISTA</button>
        <h1>${el.name}</h1>
        <p>${el.website}</p>
        <p>${el.company.name}</p>
        
        `;
        respuesta.innerHTML = usr;
    })
    .catch(err=>{
        console.log(err.message);
    });
}