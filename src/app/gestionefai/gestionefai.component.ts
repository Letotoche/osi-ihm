import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionefai',
  templateUrl: './gestionefai.component.html',
  styleUrls: ['./gestionefai.component.css']
})
export class GestionefaiComponent implements OnInit {

  critStatuts: String[] ;
  efais: any[];
  
  constructor() { }

  ngOnInit() {
    this.critStatuts = [
      "Créée",
      "En cours",
      "Validée",
      "Abandonnée"
    ];
  }


}
