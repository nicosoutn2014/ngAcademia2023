import { Edificio } from "./edificio";
import { Unidad } from "./unidad";

export interface Jugador {
    idJugador:number
    nombre: string;
    poblacion: number;
    civilizacion: string;
    madera:number;
    Piedra:number;
    Oro:number;
    Comida:number;
    aldeanos:Array<Unidad>
    militares:Array<Unidad>
    edificios:Array<Edificio>
}