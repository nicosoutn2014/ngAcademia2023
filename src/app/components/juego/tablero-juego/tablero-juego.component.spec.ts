import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroJuegoComponent } from './tablero-juego.component';

describe('TableroJuegoComponent', () => {
  let component: TableroJuegoComponent;
  let fixture: ComponentFixture<TableroJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
