import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [PersonnesListComponent, UpdatePersonneComponent, DetailComponent],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})

export class PersonneModule { }
