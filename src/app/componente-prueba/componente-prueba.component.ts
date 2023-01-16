import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-prueba',
  templateUrl: './componente-prueba.component.html',
  styleUrls: ['./componente-prueba.component.scss']
})
export class ComponentePruebaComponent {
  title: string = 'Academia Novit 2023'

  onTitleChange() {
    this.title = 'Academia Novit 2023 - Angular'
  }
}
