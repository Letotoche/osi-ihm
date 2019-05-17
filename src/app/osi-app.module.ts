import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OsiAppComponent } from './osi-app.component';
import { GestionefaiComponent } from './gestionefai/gestionefai.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [],
  declarations: [
    OsiAppComponent,
    GestionefaiComponent
  ],
  bootstrap: [OsiAppComponent]
})
export class AppModule { }
