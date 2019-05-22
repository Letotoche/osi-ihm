import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OsiAppComponent } from './osi-app.component';
import { GestionefaiComponent } from './gestionefai/gestionefai.component';
import { OsiAppRoutingModule } from './osi-app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { EfaiComponent } from './efai/efai.component';

@NgModule({
  imports: [
    BrowserModule,
    OsiAppRoutingModule
  ],
  providers: [],
  declarations: [
    OsiAppComponent,
    GestionefaiComponent,
    AccueilComponent,
    EfaiComponent
  ],
  bootstrap: [OsiAppComponent]
})
export class AppModule { }
