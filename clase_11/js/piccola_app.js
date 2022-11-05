let respuesta = document.getElementById("respuesta");

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


function funx(i){
    alert(i);
}