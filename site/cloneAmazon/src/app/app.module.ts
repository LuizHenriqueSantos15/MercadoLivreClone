import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComprarComponent } from './comprar/comprar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
      NavComponent,
      InicioComponent,
      ComprarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
