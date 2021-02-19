import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

const routes: Routes = [
  { path: 'employes-list', component: EmployesListComponent},
  { path: 'update/:id', component: UpdateEmployeComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: '', component: EmployesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
