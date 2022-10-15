let tablero = document.getElementById('tablero');
let r_jugador1 = document.getElementById('r_jugador1');
let r_jugador2 = document.getElementById('r_jugador2');
let casillas = document.querySelectorAll("#tablero>div");
let btn_inicia = document.querySelector("#btn_inicia");

let turno = 1;
let resultado1 = 0;
let resultado2 = 0;
let n_jugadas = 0


btn_inicia.addEventListener("click", inicia_partido);

tablero.addEventListener('click', (ev)=>{
    let cc = ev.target;
    if(cc.id != "tablero" && cc.innerHTML == "?"){
        let vv = cc.dataset.valor;
        cc.innerHTML = vv;
        if(turno == 1){
            resultado1 += parseInt(vv);
            r_jugador1.innerHTML = resultado1;
            turno = 2;
            cc.style.background = "#f00";
        }else{
            resultado2 += parseInt(vv);
            r_jugador2.innerHTML = resultado2;
            turno = 1;
            cc.style.background = "#0f0";
        }
        n_jugadas++;
        if(n_jugadas == 16){
            determinar_ganador();
        }
        
    }
    
});

function inicia_partido(){
    casillas.forEach((el) => {        
        //let ran = Math.random(); // numero entre 0 y 1
        let min = 1; // incluido
        let max = 11; // excluido
        //console.log(Math.random() * (max - min) + min); // con decimales
        //console.log(Math.floor(Math.random() * (max - min)) + min); // sin decimales
        let rr = Math.floor(Math.random() * (max - min)) + min;
        el.dataset.valor = rr;
        el.innerHTML = "?";
        turno = 1;
        resultado1 = 0;
        resultado2 = 0;
        r_jugador1.innerHTML = 0;
        r_jugador2.innerHTML = 0;
        n_jugadas = 0;
    });
}
inicia_partido();

