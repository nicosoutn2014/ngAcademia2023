import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-prueba',
  templateUrl: './componente-prueba.component.html',
  styleUrls: ['./componente-prueba.component.scss']
})
export class ComponentePruebaComponent {
  title: string = 'Academia Novit 2023'
  contador: number = 10
  myInterval: any
  items: string[] = []

  constructor() {
    /*this.myInterval = setInterval(() => {
      this.contador += 1
    }, 2000);*/
  }

  onTitleChange() {
    this.title = 'Academia Novit 2023 - Angular'
  }

  ngOnDestroy() {
    console.log('on destroy padre')
    clearInterval(this.myInterval)
  }

  addItem(newItem: string) {
    this.items.push(newItem)
  }
}
