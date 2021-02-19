import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';
import {Personne} from 'src/app/interfaces/personne';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {

  id!: number;
  personne!: Personne;

  constructor(private personneService: PersonneService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getP(this.id).subscribe(data => {
      console.log(data);
      this.personne = data;
    })
  }

  updatePerson() {
    this.personneService.updateP(this.id, this.personne).subscribe(data => {
      console.log(data);
    })
    this.router.navigateByUrl('personne/personnes-list')
  }

}



