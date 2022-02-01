import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from "../models/vet";

@Injectable({
  providedIn: 'root'
})
export class VetService {

  public url: string = "http://localhost/AJAX_M/ServicioWeb/petclinic/servicios.php";

constructor(private http: HttpClient) { }

  getVets() {
    let pa = {
      accion: "ListarVets",
    }
    return this.http.post<Vet[]>(this.url, JSON.stringify(pa));
  }
}
