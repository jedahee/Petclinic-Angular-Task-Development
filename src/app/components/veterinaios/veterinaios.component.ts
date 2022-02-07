import { Component, OnInit } from '@angular/core';
import { VetService } from './../../services/vet.service';
import { Vet } from "../../models/vet";

@Component({
  selector: 'app-veterinaios',
  templateUrl: './veterinaios.component.html',
  styleUrls: ['./veterinaios.component.less']
})
export class VeterinaiosComponent implements OnInit {

  public listaVets: Vet[] = new Array(new Vet());


  constructor(private vetService: VetService) {
    this.vetService.getVets().subscribe(datos => {
      this.listaVets = datos;
    });
  }

    deleteVet(id: number) {

      if (confirm("¿Estás seguro que quieres realizar esta operación?")) {
        this.vetService.deleteVet(id).subscribe(datos => {
          if (datos.result == "OK")
            this.vetService.getVets().subscribe(datos => {
              this.listaVets = datos;
            });
        });
      }
    
  }


  ngOnInit(): void {
  }

}
