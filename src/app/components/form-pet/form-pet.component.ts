import { Pettype } from './../../models/pettype';
import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { Owner } from 'src/app/models/owner';
import { PettypeService } from 'src/app/services/pettype.service';
import { OwnerService } from 'src/app/services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.less']
})
export class FormPetComponent implements OnInit {

  public pettype: Pettype = <Pettype>{};
  public owner: Owner = <Owner>{};
  public ownerID: number = -1;
  public petID: number = -1;
  public owners: Owner [] = [];
  public types: Pettype [] = [];
  public pet: Pet;
  public textoBoton: string = "";

  constructor(private ruta: Router, private route: ActivatedRoute, private ownerService: OwnerService, private petService: PetService, private ptService: PettypeService) {
    this.ownerService.getOwners().subscribe(datos => {
      this.owners = datos;
    });

    this.ptService.getPetTypes().subscribe(datos => {
      this.types=datos;
    });

    this.pet = {
      id: -1,
      name: "",
      birthDate: new Date(),
      type: <Pettype>{
        id: -1,
        name: '',

      },
      owner: <Owner>{
        id: -1,
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        telephone: '',
        pets: []
      },
      visits: []
    }
    

  }

  ngOnInit(): void {
    this.pet.owner.id = this.route.snapshot.params["idOwner"];
    this.petID = this.route.snapshot.params["idPet"];
    
    
    if (this.petID == -1) {
      this.textoBoton = "Añadir";
    } else {
      this.textoBoton = "Modificar";
      this.petService.getPetById(this.petID).subscribe(pet => {
        this.pet = pet;
      });
    }
  }
  

  onSubmit(pet: Pet): void {

    if (this.pet.id == -1) {
      this.petService.addPet(this.pet).subscribe(datos => {
        this.ruta.navigate(["/owner/" + this.pet.owner.id]);
      });
    } else {
      pet.id=this.pet.id;
      
      this.petService.editPet(this.pet).subscribe(datos => {

        if (datos.result == "OK")
          this.ruta.navigate(["/owner/" + this.pet.owner.id]);
        else
          alert("No se ha podido modificar");
        
      });
    }
  }

}
