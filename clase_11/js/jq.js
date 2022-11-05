$( document ).ready(function() {
    $( "#btn1" ).on( "click", function() {
        let t = new Date().getTime();
       alert( t );
    });
});

let a = 1;

(function() {
alert( a );
    let fecha_actual = function(){
        let f_actual = new Date();
        let dias_s = f_actual.getDay();
        let dia = f_actual.getDate();
        let mes = f_actual.getMonth();
        let anno = f_actual.getFullYear();
        let dias = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return `${dias[dias_s]} ${dia} ${meses[mes]} ${anno}`;
    }
    
    let hora_actual = function(){
        let h_actual = new Date();
        let horas = h_actual.getHours();
        let minutos = h_actual.getMinutes();
        let segundos = h_actual.getSeconds();
        let cero = function(x){
            let ss = ( x > 9 ) ? x : "0" + x ;
            return ss;
        }
        return `${cero(horas)}:${cero(minutos)}:${cero(segundos)}`;
    }
    
    document.getElementById("fecha").innerHTML = fecha_actual() + " -- " + hora_actual();
})(a);









