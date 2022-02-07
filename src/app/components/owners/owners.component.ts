import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.less']
})
export class OwnersComponent implements OnInit {

  public listaOwners: Owner[] = new Array();

  constructor(private ownerService: OwnerService) {
    this.ownerService.getOwners().subscribe(datos => {
      this.listaOwners = datos;
    });
  }

  deleteOwner(id: number) {

    if (confirm("¿Estás seguro que quieres realizar esta operación?")) {
      this.ownerService.deleteOwner(id).subscribe(datos => {
        this.listaOwners = datos;
      });
    }
    
  }

  ngOnInit(): void {
  }

}
