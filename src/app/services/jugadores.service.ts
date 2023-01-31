import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor() { }

  jugadores: Array<Jugador> = [
    {nombre:'Jonathan',Oro:0,Piedra:0,idJugador:1,poblacion:0,madera:0,Comida:0,civilizacion:'Bizantinos',militares:[],edificios:[],aldeanos:[]},
    {nombre:'Marcelo',Oro:0,Piedra:0,idJugador:2,poblacion:0,madera:0,Comida:0,civilizacion:'Francos',militares:[],edificios:[],aldeanos:[]},
    {nombre:'Diego',Oro:0,Piedra:0,idJugador:3,poblacion:0,madera:0,Comida:0,civilizacion:'Britanios',militares:[],edificios:[],aldeanos:[]}
  ];

  getJugadores():Array<Jugador>{
    return this.jugadores;
  }

}
