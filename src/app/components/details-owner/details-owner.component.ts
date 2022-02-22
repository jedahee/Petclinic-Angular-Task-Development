import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-owner',
  templateUrl: './details-owner.component.html',
  styleUrls: ['./details-owner.component.less']
})
export class DetailsOwnerComponent implements OnInit {

  public owner: Owner = <Owner>{};

  constructor(private ownerService: OwnerService, private ruta: Router, private route: ActivatedRoute) {
    const ownerID = this.route.snapshot.params["id"];

    this.ownerService.getOwnerByID(ownerID).subscribe(datos => {
      this.owner = datos;
    });
  }

  deleteOwner() {
    if (confirm("¿Estás seguro que quieres realizar esta operación?")) {
      this.ownerService.deleteOwner(this.owner.id).subscribe(datos => {
        this.ruta.navigate(["/owners"])
      });
    }
  }

  ngOnInit(): void {
  }

}
