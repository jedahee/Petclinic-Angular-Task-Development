import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.less']
})
export class OwnersComponent implements OnInit {

  public listaOwners: any = [];

  constructor(private ownerService: OwnerService) {
    this.ownerService.getOwners().subscribe(datos => {
      this.listaOwners = datos;
    });
  }

  ngOnInit(): void {
  }

}
