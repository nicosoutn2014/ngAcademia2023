import { Component, OnInit } from '@angular/core';
import { Edificio } from 'src/app/models/edificio';
import { Jugador } from 'src/app/models/jugador';
import { JuegoService } from 'src/app/services/juego.service';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-tablero-juego',
  templateUrl: './tablero-juego.component.html',
  styleUrls: ['./tablero-juego.component.scss',]
})
export class TableroJuegoComponent implements OnInit {

  jugadores: Array<Jugador> = [];
  idJugadorSeleccionado:number = 0;
  constructor(private juegoService:JuegoService) {  }
  
  ngOnInit(): void {
    this.obtenerJugadores();
  }

  seleccionarJugador(id:number){
    console.log(id);
    this.idJugadorSeleccionado = id;
  }

  agregarEdificio(edificioNuevo:Edificio){
    console.log(edificioNuevo);
    let jugador = this.jugadores.find(x=>x.idJugador == this.idJugadorSeleccionado);
    ////Alternativa llamando al service de juego y creando el edificio antes de emitir el evento
    this.obtenerJugadores();
    
    //Alternativa llamando al servicio de juego desde el componente padre modificando la lista en memoria
    //this.juegoService.createEdificio(edificioNuevo,this.idJugadorSeleccionado).subscribe(response => jugador!.edificios.push(edificioNuevo))
   
    //Alternativa llamando al servicio de juego desde el componente padre recargando la lista consultando la api
    //this.juegoService.createEdificio(edificioNuevo,this.idJugadorSeleccionado).subscribe(response => this.obtenerJugadores())

  }

  obtenerJugadores():void{
    this.juegoService.getJugadores().subscribe(response=> this.jugadores = response);
  }
}
