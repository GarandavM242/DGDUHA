import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetitionnairesComponent } from './petitionnaires/Views/petitionnaires/petitionnaires.component';


const routes: Routes = [
  {path:'pet', component: PetitionnairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
