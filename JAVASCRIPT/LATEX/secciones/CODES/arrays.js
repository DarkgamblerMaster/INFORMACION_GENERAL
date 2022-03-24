"use strict"

let array = ["perro", 5, "florero"];


document.write(array[0] + "<br>");

class Animal{
	constructor(tipo, edad, color){
		this.tipo = tipo;
		this.edad = edad;
		this.color = color;
		this.info = `Animal: ${this.tipo}, Edad: ${this.edad}, Color: ${this.color}`;
	}


}

const perro = new Animal("perro", 18, "rojo");

document.write(perro.info);