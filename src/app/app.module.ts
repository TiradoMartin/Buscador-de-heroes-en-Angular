import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Servicios
import {HeroesService} from './services/heroes.service'

//Rutas
import {APP_ROUTING} from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesBusquedaComponent } from './components/heroes-busqueda/heroes-busqueda.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesBusquedaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,



  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
