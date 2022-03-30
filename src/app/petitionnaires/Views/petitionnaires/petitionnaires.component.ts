import { Component, OnInit, ViewChild } from '@angular/core';
import { Pet } from '../../Interfaces/Pet'
import { PetitionnairesService } from '../../Services/petitionnaires.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPetComponent } from '../../Components/details-pet/details-pet.component';


@Component({
  selector: 'app-petitionnaires',
  templateUrl: './petitionnaires.component.html',
  styleUrls: ['./petitionnaires.component.css']
})
export class PetitionnairesComponent implements OnInit {

  public dataOfPet: Array<Pet> = [];
  displayedColumns: string[] = [
    'id', 'name', 'type_Pet', 'qualite_Pet', 'adresse_Pet', 'arrondissement_Pet', 'ville_Pet', 'createdAt_Pet', 'actions'
  ];
  dataSource!: MatTableDataSource<Pet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(private readonly PetService: PetitionnairesService,
    private readonly dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllPet();
  }

  getAllPet() {
    this.PetService.getPet().subscribe({
      next: (data:Array<Pet>) => {
        this.dataOfPet = data;
        this.dataSource = new MatTableDataSource<Pet>(data)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        // console.log('Données chargées', this.dataSource)
        // console.log('Données dataofpet', this.dataOfPet)
      },
      error: (err) => console.log('Msg d\'erreur', err)
    })
  }

  openDetailPet(data:Pet) {
    const dialogRef = this.dialog.open(DetailsPetComponent, {
      disableClose: true,
      width: '500px',
      data:data
    })
  }

  applyFilter(event: Event) {

  }
}
