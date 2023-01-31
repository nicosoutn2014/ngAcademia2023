import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePruebaComponent } from './components/pruebas/componente-prueba/componente-prueba.component';
import { TableroJuegoComponent } from './components/juego/tablero-juego/tablero-juego.component';
import { DirectivasFormulariosComponent } from './components/pruebas/directivas-formularios/directivas-formularios.component';
import { ComponentePrueba2Component } from './components/pruebas/componente-prueba2/componente-prueba2.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearEdificioComponent } from './components/juego/crear-edificio/crear-edificio.component';
import { JugadoresService } from './services/jugadores.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePruebaComponent,
    ComponentePrueba2Component,
    DirectivasFormulariosComponent,
    TableroJuegoComponent,
    CrearEdificioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
