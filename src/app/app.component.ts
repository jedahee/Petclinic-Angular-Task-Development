import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'petclinic';

  public nombrePag: string = "Home";

  cambiarTitulo(nombre: string) {
    this.nombrePag = nombre;
  }
}
