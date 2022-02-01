import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/services/owner.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.less']
})
export class FormOwnerComponent implements OnInit {

  public owner: Owner;
  public textoBoton: string = "";

  constructor(private ownerService: OwnerService, private ruta: Router, private route: ActivatedRoute) { 
    this.owner = {
      id: -1,
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      telephone: "",
      pets: []
    }
  }

  ngOnInit(): void {
    const ownerID = this.route.snapshot.params["id"];

    if (ownerID == -1) {
      this.textoBoton = "Añadir";
    } else {
      this.textoBoton = "Modificar";
      this.ownerService.getOwnerByID(ownerID).subscribe(owner => {
        this.owner = owner;
      });
    }
  }

  onSubmit(owner: Owner): void {
    if (this.owner.id == -1) {
      this.ownerService.addOwner(owner).subscribe(datos => {
        this.ruta.navigate(["/owners"]);
      });
    } else {
      this.ownerService.editOwner(this.owner).subscribe(datos => {
        this.ruta.navigate(["/owners"]);
      });
    }
  }

}
