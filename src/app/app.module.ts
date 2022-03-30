import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetitionnairesModule } from './petitionnaires/Modules/petitionnaires/petitionnaires.module';
import { PetitionnairesComponent } from './petitionnaires/Views/petitionnaires/petitionnaires.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { DetailsPetComponent } from './petitionnaires/Components/details-pet/details-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PetitionnairesComponent,
    DetailsPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PetitionnairesModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    RouterModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
