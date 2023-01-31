import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { Edificio } from '../models/edificio';
@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  baseUrl: string = "https://localhost:7146/api/Jugador"

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<Array<Jugador>> {
    return this.http.get<Array<Jugador>>(this.baseUrl+'/GetJugadores');
    //Ejemplo modificando la lista de jugadores antes de devolverla
    //return this.http.get<Array<Jugador>>(this.baseUrl+'/GetJugadores').pipe(map(jugadores=>jugadores.map(jugador=>{return {...jugador, nombre: jugador.nombre.toUpperCase()}})));
  }

  createEdificio(edificio:Edificio, idJugador:number):Observable<number>{
    return this.http.post<number>(this.baseUrl+'/CrearEdificio/'+idJugador,edificio);
  }
}
