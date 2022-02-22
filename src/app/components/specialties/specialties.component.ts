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
  public setId: number = -1;

  constructor(private SS: SpecialtyService) {
    SS.getSpecialties().subscribe(datos => {
      this.listaSpecialties = datos;
    }); 

    this.specialty = {
      id: -1,
      name: "",
    }
  }

  estaEditando(id: number) {
    return (this.setId != id);
  }

  cambiarId(id: number) {
    this.setId = id;
  }

  borrar(id:number) {
    if (confirm("¿Estas seguro que quieres borrar esta especialidad?")) {
      this.SS.delSpecialty(id).subscribe(datos => {
        if (datos.result == "OK") {
          this.listaSpecialties=this.listaSpecialties.filter(sp => sp.id != id);
        } else {
          alert("Ha habido un fallo")
        }
      }); 
    } 
  }

  editar(Sp: Specialty) {
    this.SS.editSpecialty(Sp).subscribe(datos => {
      if (datos.result == "OK") {
        this.setId = -1;
      } else {
        alert("Ha habido un fallo")
      }
    }); 
  }

  onSubmit(specialty: Specialty) {
    if (specialty.name != undefined || specialty.name != "") {
      this.SS.addSpecialty(specialty).subscribe(datos => {
        this.listaSpecialties.push(datos);
        this.specialty.name = "";
      }); 
    } 
  }

  ngOnInit(): void {
  }

}
