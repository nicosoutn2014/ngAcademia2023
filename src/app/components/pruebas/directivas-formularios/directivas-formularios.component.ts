import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-formularios',
  templateUrl: './directivas-formularios.component.html',
  styleUrls: ['./directivas-formularios.component.scss']
})
export class DirectivasFormulariosComponent {
  cursos: Curso[] = [{
    hecho: true,
    nombre: 'Angular'
  }, {
    hecho: false,
    nombre: 'Netcore'
  }]

  toggle: boolean = true
  style: string = ''
  inputValue: string = ''

  onToggle() {
    this.toggle = !this.toggle
    console.log(this.style)
    //this.inputValue = 'Modificado desde el modelo'
  }
}


interface Curso {
  hecho: boolean
  nombre: string
}