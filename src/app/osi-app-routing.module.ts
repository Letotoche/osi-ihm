import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionefaiComponent } from './gestionefai/gestionefai.component';
import { AccueilComponent } from "./accueil/accueil.component";
import { EfaiComponent } from "./efai/efai.component";

const OSIROUTE:Routes = [  
  { path: "efai/gestion", component: GestionefaiComponent },
  { path: "efai/edit/:id", component: EfaiComponent },
  { path: "accueil", component: AccueilComponent },
  { path: "**", redirectTo: "accueil",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(OSIROUTE)],
  exports: [ RouterModule]
})

export class OsiAppRoutingModule { }

