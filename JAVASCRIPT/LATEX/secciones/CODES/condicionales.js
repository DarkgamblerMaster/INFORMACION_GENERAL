"use strict"

let edad = prompt("Ingrese su edad: ");

if( edad < 18){
    document.write("Eres demasiado joven chaval, largo de aqui");
}
else if( edad >= 18 && edad < 35 ){
    document.write("Puedes entrar chaval, bienvenido al fieston" );
}
else{
    document.write(`Vete a tomar lechita caliente viejales con ${edad}
    	anos no puedes entrar al fieston` );
}
