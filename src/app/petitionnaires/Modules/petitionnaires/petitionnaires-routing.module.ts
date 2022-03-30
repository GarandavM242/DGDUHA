import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetitionnairesComponent } from '../../Views/petitionnaires/petitionnaires.component';

const routes: Routes = [
  {path:'Pet', component:PetitionnairesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetitionnairesRoutingModule { }
