import { Component, OnInit } from '@angular/core';
import { VetService } from './../../services/vet.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.less']
})
export class VetsComponent implements OnInit {
  
  public listaVets: any = [];
  
  constructor(private vetService: VetService) {
    this.vetService.getVets().subscribe(datos => {
      console.log(datos);
      this.listaVets = datos;
    });
  }

  ngOnInit() {
  }

}
