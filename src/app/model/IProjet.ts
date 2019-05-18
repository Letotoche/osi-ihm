export interface IProjet {
    codeProjet: String;
    libelle: String;
    statut: String;
    dateMiseEnService?: Date;
    RGMOA?: number;
    BUMOA?: number;
    RGMOAD?: number;
    BUMOAD?: number;
    subventionPrevue?: number;
    montantBudget: number;
    
}