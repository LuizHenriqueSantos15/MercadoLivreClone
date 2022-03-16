import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'comprar', component: ComprarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
