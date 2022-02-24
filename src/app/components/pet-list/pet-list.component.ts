import { Component, OnInit, Input } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { Pettype } from 'src/app/models/pettype';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.less']
})
export class PetListComponent implements OnInit {

  @Input() petInp: Pet = <Pet>{};
  public pet: Pet;

  constructor(private petService: PetService) {
    this.pet = {
      id: 0,
      name: "",
      birthDate: new Date(),
      type: new Pettype(),
      owner: new Owner(),
      visits: [],
    }
  }

  ngOnInit(): void {
    this.petService.getPetById(this.petInp.id).subscribe(datos=> {
      
      this.pet = datos;
    });
  }

}
