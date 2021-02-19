import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  personnes: any = [];
  // Utilisation de la classe Angular FormControl 
  // nous permettant d'associer un attribut ici nom
  // à un champ de formulaire defini dans le .html
  // afin de faciliter le binding et contrôle, validation  
  // Dans le .html, on aura un champ de formulaire associe a l'objet nom.
  // Possibilité d'initialiser une valeur initiale  
  // nom = new FormControl('Wick');  
  // FormGroup (Classe Angular) -> Composee de plusieurs objets de type FormControl  
  // personneForm = new FormGroup({
  //   id : new FormControl('', Validators.required),
  //   nom : new FormControl('', [Validators.required,
  //      this.checkInputValidator]),
  //   prenom : new FormControl('', [Validators.required, 
  //     this.checkInputValidator]),
  //     adresse:  new FormGroup({
  //       rue : new FormControl(''),
  //       ville : new FormControl(''),
  //       codePostal : new FormControl('')
  //     })  
  // });  
  // Utilisation de la classe service Angular FormBuilder 
  // à injecter dans le constructeur pour l 'utiliser
  // nous permettant de simplifier la construction d'un Formulaire
  // en evitant les repetitons de FormControl
  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, this.checkInputValidator]],
    prenom: ['', [Validators.required, this.checkInputValidator]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    // FormArray -> définit un tableau de taille indeterminée de FormControl
    sports: this.fb.array([])
  });
  checkInputValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'Entrée non valide' };
    }
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    // La methode setValue() permet d'initialiser, ou modifier les
    // valeurs de formulaire : il faut preciser une valeur pour chaque
    // FormControl du FormGroup
    this.personneForm.setValue({ nom: 'Doe', prenom: 'John', id: 1 });
    // La methode patchValue() permet d'initialiser, ou modifier
    // quelques (ou tous les) FormControl du FormGroup
    this.personneForm.patchValue({
      prenom: 'Jean',
      adresse: {
        codePostal: '06000'
      }
    });
  }
  afficherTout() {
    this.personnes.push({ ...this.personneForm.value });
    console.log(this.personneForm.value);
    this.personneForm.reset();
  }
  get id() {
    return this.personneForm.get('id');
  }
  get nom() {
    return this.personneForm.get('nom');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }
  // afficherNom(){
  //   console.log(this.nom.value)
  // }  // Pour afficher instantatnèment les sports ajoutés par 
  // l'utilisateur, on doit retourner notre FormArray
  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }
  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }
  supprimerSport(i: number) {
    this.sports.removeAt(i);
  }
}
