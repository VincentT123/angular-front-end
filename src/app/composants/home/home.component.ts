import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-front-end';
  nom = 'Doe';
  couleur = 'yellow';
  libelleFormation = 'POEC FRONT';
  personne: Personne = new Personne(100, 'Wick', 'John');
  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Doe', 'Jane'),
    new Personne(102, 'Cesar', 'Jules'),
    new Personne(103, 'Bonaparte', 'Napoleon')
  ];
  tab :number[] = [3, 2, 6, 5, 11, 14, 18];
  
  direBonjour() {
    return 'Bonjour à tous';
  }
  getColor() {
    return 'white';
  }
  getBackgroundColor() {
    return 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
