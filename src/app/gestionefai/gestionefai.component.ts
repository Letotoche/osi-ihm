import { Component, OnInit } from '@angular/core';
import { StatutEfai, IEfai } from '../model/IEfai';
import { EfaiServiceService } from '../efai.service';

@Component({
  selector: 'app-gestionefai',
  templateUrl: './gestionefai.component.html',
  styleUrls: ['./gestionefai.component.css']
})
export class GestionefaiComponent implements OnInit {

  critStatuts: StatutEfai[] ;
  efais: any[];
  
  constructor( private efaiService:EfaiServiceService) { }

  ngOnInit() {
    this.critStatuts = [
      StatutEfai.CREEE,
      StatutEfai.EN_COURS,
      StatutEfai.VALIDEE,
      StatutEfai.ABANDONNEE,
    ];
    this.efais = this.efaiService.getEfais();
    console.log('efais :'  +this.efais);
    
  }

    efaisFiltrees(): IEfai[] {
      return this.efais;
    }

}
