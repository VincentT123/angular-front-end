import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { TableComponent } from './composants/materials/table/table.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { TpFormComponent } from './composants/tp-form/tp-form.component';

// Déclaration d'un tableau de routes appelées dans le module principal

// redirectTo: "/home" nous utilisons cette propriété dans le tableau routes pour indiquer au service de routage
// si les utilisateurs naviguent vers l'url vide, ils doivent êter redirigés vers l'url d'accueil plutôt que l'url vide est

// pathMatch : 'full' cette propriété commande à Angular q'une url doit correspondre au chemin
// de chaîne exacte et non une chaîne partiellement vide
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'templateform', component: TemplateformComponent },
  { path: 'calculette', component: CalculetteComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'tp-form', component: TpFormComponent },
  { path: 'drag', component: DragdropComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'address-form', component: AddressFormComponent },
  // lazy loading
  { path: 'vehicule', loadChildren: './modules/vehicule/vehicule.module#VehiculeModule'},
  { path: 'personne', loadChildren: './modules/personne/personne.module#PersonneModule'},
  { path: 'employe', loadChildren: './modules/employe/employe.module#EmployeModule'},

  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' } // '**' = n'importe quel autre contenu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Ce fichier permet d'assurer le mapping chemin/composant
export class AppRoutingModule { }
