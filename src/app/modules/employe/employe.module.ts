import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [EmployesListComponent, UpdateEmployeComponent, DetailComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EmployeModule { }
