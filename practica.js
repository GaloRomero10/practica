'use strict'
function Juego(apodo,vidas,valor){
    this.apodo = apodo;
    this.vidas = vidas;
    this.valor = valor;
    this.reducirVidas = function(){
        this.vidas--;
        alert(`${this.apodo} perdio una vida Vidas Restantes: ${this.vidas}`);

    }

    this.mostrarPlayer = function(){
        alert(`${this.apodo} - Vidas:${this.vidas}`);

    };


}

let jugador1 = new Juego("player1",3,Number=prompt("Ingrese un numero del 1 a 7"));
let jugador2 = new Juego("Player2",3,Number=prompt("Ingrese un numero del 1 al 7"));

jugador1.mostrarPlayer();
jugador1.reducirVidas();
jugador2.mostrarPlayer();
jugador2.reducirVidas();