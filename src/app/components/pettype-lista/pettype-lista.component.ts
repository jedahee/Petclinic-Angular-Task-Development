import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  public copia: string = "";

  public current_edit: {
    pettype: Pettype,
    input: any,
  };

  constructor(private PTService: PettypeService, private ref: ElementRef) {
    this.PTService.getPetTypes().subscribe(datos => {
      this.listaPetType=datos;
    });

    this.current_edit = {pettype:<Pettype>{}, input: null};
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

  borrarPettype(id:number, index:number) {
    if (confirm("¿Quieres borrar este registro?")) {
      this.PTService.borrarPettype(id).subscribe(datos => {
        if (datos.result != "OK" || datos.result == "FAIL")
          alert("¡Ha habido un fallo en el borrado!");
        else {
          this.listaPetType=this.listaPetType.filter(pt => pt.id != id);
        }
      });
    }
    
  }

  editarPettype(PT: Pettype, name:any, id: number) {
    if (this.setId == -1) {
      this.setId = id;

      // Copia de los datos
      this.current_edit.pettype = JSON.parse(JSON.stringify(PT));
      this.current_edit.input = name;

      // Focus
      this.ref.nativeElement = name;
      this.ref.nativeElement.focus();

    } else {
        if (this.setId == id) {
          // Reestableciendo al nombre sin modificar
          this.ref.nativeElement.value = this.current_edit.pettype.name;
          this.setId = -1;
        } else {
          this.pettype.name = this.current_edit.pettype.name
          this.ref.nativeElement = this.current_edit.input
          this.ref.nativeElement.focus()
        }        
    }
    
  }

  updatePettype(PT: Pettype) {
    this.PTService.editPetTypes(PT).subscribe(datos => {
      if (datos.result != "OK" || datos.result == "FAIL")
        alert("¡Ha habido un fallo en la modificación!");
      else
        this.setId = -1;
    });
  }

  ngOnInit(): void {
  }

}
