import { Specialty } from './../models/specialty';
import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from '../services/specialty.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.less']
})
export class SpecialtiesComponent implements OnInit {

  public listaSpecialties: Specialty [] = [];

  constructor(SS: SpecialtyService) {
    SS.getSpecialties().subscribe(datos => {
      this.listaSpecialties = datos;
    }); 
  }

  ngOnInit(): void {
  }

}
