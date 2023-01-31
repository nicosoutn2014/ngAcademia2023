import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Edificio } from 'src/app/models/edificio';
import { Jugador } from 'src/app/models/jugador';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-crear-edificio',
  templateUrl: './crear-edificio.component.html',
  styleUrls: ['./crear-edificio.component.scss']
})
export class CrearEdificioComponent {

  @Input()
  idJugador:number = 0;
  @Output('idJugadorChange') cancel = new EventEmitter();
  @Output('edificioCreado') add = new EventEmitter<Edificio>();

  @Input()
  jugador!:Jugador;

  nuevoEdificio: FormGroup;

  constructor (fb: FormBuilder,
    private juegoService:JuegoService){
  this.nuevoEdificio = fb.group({
        nombre: ['', Validators.required],
        vida: ['', Validators.required],
        ataque: ['', Validators.required]
      });
  }

  crearEdificio(){
    let edificioNuevo:Edificio = {
      nombre : this.nuevoEdificio.get('nombre')?.value,
      puntosAtaque : this.nuevoEdificio.get('ataque')?.value,
      puntosVida:  this.nuevoEdificio.get('vida')?.value
    };
    console.log(edificioNuevo);
    //Alternativa llamando al service de juego y creando el edificio antes de emitir el evento
    this.juegoService.createEdificio(edificioNuevo, this.idJugador).subscribe(response=> this.add.emit(edificioNuevo));
    //Alternativa directamente emitiendo el evento y llamando al servicio de juego desde el componente padre
    //this.add.emit(edificioNuevo);
  }

  cancelar(){
    this.idJugador = 0;
    this.cancel.emit(0);
  }
}
