import { IEfai, StatutEfai } from './IEfai';
import { toDate } from '@angular/common/src/i18n/format_date';

export const EFAIS: IEfai[] = [
    {
        identifiant: 1,
        projet: {
            codeProjet:'P00001',
            libelle:'Projet numéro 1',
            statut:'En cours',
            montantBudget:10000
        },
        statut: StatutEfai.CREEE,
        dateCreation: toDate('25/09/2018'),
        dateDerniereModif: toDate('01/10/2018')
    },
    {
        identifiant: 2,
        projet: {
            codeProjet:'P00002',
            libelle:'Projet numéro 2',            
            statut:'En cours',
            montantBudget:25300
        },
        statut: StatutEfai.EN_COURS,
        dateCreation: toDate('25/12/2019'),
        dateDerniereModif: toDate('01/03/2019')
    }
    
];