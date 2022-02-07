import { SpecialtyService } from './../../services/specialty.service';
import { Specialty } from './../../models/specialty';
import { Component, OnInit } from '@angular/core';
import { Vet } from 'src/app/models/vet';
import { VetService } from './../../services/vet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-vet',
  templateUrl: './form-vet.component.html',
  styleUrls: ['./form-vet.component.less']
})
export class FormVetComponent implements OnInit {

  public vet: Vet;
  public textoBoton: string = "";
  public listaSpecialties: Specialty[] = [];

  constructor(private specialtyService: SpecialtyService, private vetService: VetService, private ruta: Router, private route: ActivatedRoute) {
    this.specialtyService.getSpecialties().subscribe(datos => {
      this.listaSpecialties = datos;
    });
    
    this.vet = {
      id: -1,
      firstName: "",
      lastName: "",
      specialties: []
    }
  }

  ngOnInit(): void {
    const vetID = this.route.snapshot.params["id"];

    if (vetID == -1) {
      this.textoBoton = "Añadir";
    } else {
      this.textoBoton = "Modificar";
      this.vetService.getVetByID(vetID).subscribe(vet => {
        this.vet = vet;
      });
    }
  }

  onSubmit(vet: Vet): void {
    if (this.vet.id == -1) {
      this.vetService.addVet(vet).subscribe(datos => {
        this.ruta.navigate(["/veterinarios"]);
      });
    } else {
      this.vetService.editVet(this.vet).subscribe(datos => {
        this.ruta.navigate(["/veterinarios"]);
      });
    }
  }

}
