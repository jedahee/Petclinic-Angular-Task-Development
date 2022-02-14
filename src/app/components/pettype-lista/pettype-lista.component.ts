import { Component, OnInit } from '@angular/core';
import { Pettype } from 'src/app/models/pettype';
import { PettypeService } from 'src/app/services/pettype.service';

@Component({
  selector: 'app-pettype-lista',
  templateUrl: './pettype-lista.component.html',
  styleUrls: ['./pettype-lista.component.less']
})
export class PettypeListaComponent implements OnInit {

  public pettype: Pettype = <Pettype>{};
  public listaPetType: Pettype[] = [];
  public  isVisible = false;
  public setId: number = -1;

  constructor(private PTService: PettypeService) {
    this.PTService.getPetTypes().subscribe(datos => {
      this.listaPetType=datos;
    });
  }

  changeIsVisible() {
    this.isVisible = !this.isVisible;
  }

  anadirNuevoPetType(PT: Pettype) {
    this.listaPetType.push(PT);
  }

  estaEditando(id: number) {
    return (this.setId != id);
  }

  borrarPettype() {

  }

  cancelarModificacion() {
    
  }

  editarPettype(PT: Pettype, id: number) {
    this.setId = id;
    
  }

  ngOnInit(): void {
  }

}
