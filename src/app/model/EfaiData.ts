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
        dateCreation: new Date('25/09/2018'),
        dateDerniereModif: new Date('01/10/2018')
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
        dateCreation: new Date('25/12/2019'),
        dateDerniereModif: new Date('01/03/2019')
    },
    {
        identifiant: 3,
        projet: {
            codeProjet:'P00003',
            libelle:'Projet numéro 3',            
            statut:'Clos techniquement',
            montantBudget:25300
        },
        statut: StatutEfai.ABANDONNEE,
        dateCreation: new Date('25/12/2019'),
        dateDerniereModif: new Date('01/03/2019')
    },
    {
        identifiant: 4,
        projet: {
            codeProjet:'P00003',
            libelle:'Projet numéro 4',            
            statut:'Clos techniquement',
            montantBudget:25300
        },
        statut: StatutEfai.VALIDEE,
        dateCreation: new Date('25/12/2019'),
        dateDerniereModif: new Date('01/03/2019')
    }
    
];