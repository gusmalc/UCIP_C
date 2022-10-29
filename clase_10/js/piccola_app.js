let respuesta = document.getElementById("respuesta");

fetch('respuesta.html')
.then(res=>{ 
    
    return res.text()
})
.then(el =>{
    console.log(el);
    respuesta.innerHTML = el;
})
.catch(err=>{
    console.log(err.message);
});