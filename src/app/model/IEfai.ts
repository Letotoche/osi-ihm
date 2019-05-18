import { IProjet } from "./IProjet"; 

export interface IEfai {
    identifiant: number;
    projet: IProjet;
    statut: String;
    dateCreation: Date,
    dateDerniereModif?: Date;
    nouveauxC12?: boolean;
    rejet?: boolean;
    partImmobilisable?: number;
    partNonImmobilisable?: number;
    tauxFinancment?: number;
}

export enum StatutEfai {
    CREEE = 'Créée',   
    EN_COURS = "En cours",
    VALIDEE = "Validée",
    ABANDONNEE = "Abandonnée"
}