import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any;
  prenom: any;

  // fonction javascript qui sert à initialiser les attributs de la classes
  // le constructor avec Angular sert seulement à faire des injections de dépendances
  constructor(private route : ActivatedRoute) { }

  // ngOnInit : méthode qui sera exécutée quand Angular aura fini d'initialiser le composant
  ngOnInit(): void {

    // http://localhost:4200/stagiaire/nom/prenom avec params
    // récupère les paramètres par l'intermédiaire d'un objet params
    // solution avec les snapshot (instantané)
    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + " " + this.prenom);

    // récupère les paramètres par l'intermédiaire d'un objet paramMap
    // solution avec les observables (asynchrone)
    // observables : ils emettent des évènements qui seront interceptés par des observateurs
    // subscribe prend en paramètre l'observateur, est une simple fonction qui recevra les valeurs
    // émises par l'observable
    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + " " + this.prenom);
    });

    // http://localhost:4200/stagiaire?nom=Wick&prenom=John avec queryParams
    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;
    // console.log(this.nom + " " + this.prenom);
    this.route.queryParamMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + " " + this.prenom);
    });

  }
  


}
