import { NgModule } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
import { DirectivasFormulariosComponent } from './directivas-formularios/directivas-formularios.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clase2', component: ComponentePruebaComponent, canActivate: [AuthGuardService] },
  { path: 'clase3', component: DirectivasFormulariosComponent, canActivate: [AuthGuardService] },
  { path: 'forms/:userEmail/:userName', component: FormsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
