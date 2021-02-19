// Quand utiliser les interfaces: utilisez-les lorsque vous devez créer un contrat des propriétés
// et des fonctions d'un objet qui sera utilisé à plusieurs endroits 
// dans votre code, en particulier dans plusieurs fichiers ou fonctions.

export interface Personne {
    id?:number | null,
    nom?:string,
    prenom?:string
}












