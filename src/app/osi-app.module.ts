import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OsiAppComponent } from './osi-app.component';
import { GestionefaiComponent } from './gestionefai/gestionefai.component';
import { OsiAppRoutingModule } from './osi-app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    OsiAppRoutingModule
  ],
  providers: [],
  declarations: [
    OsiAppComponent,
    GestionefaiComponent
  ],
  bootstrap: [OsiAppComponent]
})
export class AppModule { }
