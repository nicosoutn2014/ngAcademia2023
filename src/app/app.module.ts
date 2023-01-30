import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
import { ComponentePrueba2Component } from './componente-prueba2/componente-prueba2.component';
import { DirectivasFormulariosComponent } from './directivas-formularios/directivas-formularios.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePruebaComponent,
    ComponentePrueba2Component,
    DirectivasFormulariosComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
