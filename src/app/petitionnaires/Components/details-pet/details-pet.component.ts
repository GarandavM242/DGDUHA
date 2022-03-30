import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet } from '../../Interfaces/Pet';
import { PetitionnairesService } from '../../Services/petitionnaires.service';

@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.css']
})
export class DetailsPetComponent implements OnInit {
  public dataOfOnePet: Array<Pet> = [];
  dataOne: Array<Pet> = [];
  name!: string;

  constructor(
    private readonly PetService: PetitionnairesService,
    private readonly dialog: MatDialog,
    public dialogRef: MatDialogRef<DetailsPetComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Pet
    ) { }

  ngOnInit(): void {
    this.getOnePet(this.data)
  }

  getOnePet(data: Pet) {
    this.PetService.getOnePet(data.id_Pet).subscribe({
      next: (dataOne:Array<Pet>) => {
        this.dataOfOnePet = dataOne
        for (let index = 0; index < this.dataOfOnePet.length; index++) {
          const element = this.dataOfOnePet[index];
          console.log('name', element)
        }
        console.log('données de one', this.dataOfOnePet)
      }
    })
  }

  closeModal() {
    console.log('tu as fermé')
    this.dialogRef.close()
    
  }

}
