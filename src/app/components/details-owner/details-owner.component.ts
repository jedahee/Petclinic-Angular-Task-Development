import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-owner',
  templateUrl: './details-owner.component.html',
  styleUrls: ['./details-owner.component.less']
})
export class DetailsOwnerComponent implements OnInit {

  public owner: Owner = <Owner>{};
  public petsOwner: Pet[] = [];

  constructor(private petService: PetService, private ownerService: OwnerService, private ruta: Router, private route: ActivatedRoute) {
    const ownerID = this.route.snapshot.params["id"];

    this.ownerService.getOwnerByID(ownerID).subscribe(datos => {
      this.owner = datos;
    });

    this.petService.getPetsByIdOwner(ownerID).subscribe(datos => {
      this.petsOwner = datos;
    });
  }

  deleteOwner() {
    if (confirm("¿Estás seguro que quieres realizar esta operación?")) {
      this.ownerService.deleteOwner(this.owner.id).subscribe(datos => {
        this.ruta.navigate(["/owners"])
      });
    }
  }

  actualizarListaPet(event: any) {

  }

  ngOnInit(): void {
  }

}
