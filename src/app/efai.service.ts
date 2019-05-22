import { Injectable } from '@angular/core';
import { IEfai } from './model/IEfai';
import { EFAIS } from './model/EfaiData';

@Injectable({
  providedIn: 'root'
})
export class EfaiServiceService {
  
  constructor() { }

  getEfais(): IEfai[] {
    return EFAIS;
  }

  getEfaiById(id: number): IEfai {
    return EFAIS.find(e => e.identifiant == id);
  }
}
