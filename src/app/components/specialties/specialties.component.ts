import { Specialty } from '../../models/specialty';
import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from '../../services/specialty.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.less']
})
export class SpecialtiesComponent implements OnInit {

  public listaSpecialties: Specialty [] = [];
  public specialty: Specialty;

  constructor(private SS: SpecialtyService) {
    SS.getSpecialties().subscribe(datos => {
      this.listaSpecialties = datos;
    }); 

    this.specialty = {
      id: -1,
      name: "",
    }
  }

  borrar() {

  }

  editar() {
    
  }

  onSubmit(specialty: Specialty) {
    if (specialty.name != undefined || specialty.name != "") {
      this.SS.addSpecialty(specialty).subscribe(datos => {
        this.listaSpecialties.push(datos);
      }); 
    } 
  }

  ngOnInit(): void {
  }

}
