import { Component, OnInit } from '@angular/core';
import { Personne } from '../../interfaces/personne';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  personnes: Array<Personne> = [];
  personne: Personne = {};
  nom = "";
  // exo pipes-----
  person: any = {
    nom: 'Wick', 
    prenom: 'John'
  }
  tab :number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  //---------------

  constructor() { }

  ngOnInit(): void {

  }

  ajouterPersonne() {
    this.personnes.push({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom ='';
    console.log(this.personnes);
    console.log(this.person.prenom + " " + this.person.nom);
  }
  supprimerPersonne(personne: Personne) {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
  
}
