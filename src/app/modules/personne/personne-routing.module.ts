import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';

const routes: Routes = [
  { path: 'personnes-list', component: PersonnesListComponent},
  { path: 'update/:id', component: UpdatePersonneComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: '', component: PersonnesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
