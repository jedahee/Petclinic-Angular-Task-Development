import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { Pettype } from 'src/app/models/pettype';
import { Visit } from 'src/app/models/visit';
import { PetService } from 'src/app/services/pet.service';
import { VisitService } from 'src/app/services/visit.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.less']
})
export class PetListComponent implements OnInit {

  @Input() petInp: Pet = <Pet>{};
  @Output() eliminado = new EventEmitter<number>();
  public pet: Pet;
  public visitsPet: Visit[] = [];
  public visit: Visit;

  constructor(private petService: PetService, private visitService: VisitService) {
    this.pet = {
      id: 0,
      name: "",
      birthDate: new Date(),
      type: new Pettype(),
      owner: new Owner(),
      visits: [],
    }

    this.visit = {
      id: 0,
      visitDate: new Date(),
      description: "",
      petId: this.pet.id
    }
  }

  borrarPet() {
    if (confirm("¿Quieres borrar este registro?")) {
      this.petService.borrarPet(this.petInp.id).subscribe(datos => {
        if (datos.result != "OK" || datos.result == "FAIL")
          alert("¡Ha habido un fallo en el borrado!");
        
        this.eliminado.emit(this.petInp.id);
      });
    }
    
  }

  ngOnInit(): void {
    this.petService.getPetById(this.petInp.id).subscribe(datos=> {
      this.pet = datos;
    });

    this.visitService.getVisits(this.petInp.id).subscribe(datos=>{
      this.visitsPet = datos;
    });
  }

  onSubmit(visit: Visit) {
    if (visit.description != undefined || visit.description != "") {
      visit.id = this.visit.id;
      visit.petId = this.petInp.id;
      console.log(visit);
      this.visitService.addVisit(visit).subscribe(datos => {
        if (datos.result == "OK") {
          
          this.visitsPet.push(visit);
        } else {
          alert("No se ha podido anadir");
        }
        
        
        
      });
    }
  }

}
