import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { HomeComponent } from './composants/home/home.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { TpFormComponent } from './composants/tp-form/tp-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './composants/materials/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { GetCharPipe } from './pipes/get-char.pipe';
import { GetArrayObjectPipe } from './pipes/get-array-object.pipe';
import { GetSubArrayPipe } from './pipes/get-sub-array.pipe';
import { PersonneModule } from './modules/personne/personne.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeModule } from './modules/employe/employe.module';


@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    HomeComponent,
    ErrorComponent,
    TemplateformComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    TpFormComponent,
    DragdropComponent,
    DashboardComponent,
    TableComponent,
    NavigationComponent,
    AddressFormComponent,
    GetCharPipe,
    GetArrayObjectPipe,
    GetSubArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    VehiculeModule,
    PersonneModule,
    EmployeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
