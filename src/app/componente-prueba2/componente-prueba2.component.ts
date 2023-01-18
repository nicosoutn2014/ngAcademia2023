import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-prueba2',
  templateUrl: './componente-prueba2.component.html',
  styleUrls: ['./componente-prueba2.component.scss']
})
export class ComponentePrueba2Component implements OnInit {
  @Input() counter: number = NaN
  @Input() title: string = 'NINGUNO'
  @Output() newItemEvent = new EventEmitter<string>()
 
  constructor() {
    console.log('1) consutructor') 
  }

  ngOnInit(): void {
    console.log('3) on init')
  }

  ngOnChanges(cambios: SimpleChanges) {
    console.log('2) on changes', cambios)
  }

  ngOnDestroy() {
    console.log('on destroy hijo')
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value)
  }
}
