import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from "../models/vet";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getVets() {
    let pa = {
      accion: "ListarVets",
    }
    return this.http.post<Vet[]>(this.url, JSON.stringify(pa));
  }

  deleteVet(id: number) {
    let pa = {
      accion: "BorraVet",
      id: id,
    };

    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  addVet(vet: Vet) {
    let pa = {
      accion: "AnadeVet",
      vet: vet,
    };

    return this.http.post<Vet[]>(this.url, JSON.stringify(pa));
  }

  editVet(vet: Vet) {
    let pa = {
      accion: "ModificaVet",
      vet: vet,
    };

    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  getVetByID(vetID: number) {
    let pa = {
      accion: "ObtenerVetId",
      id: vetID,
    }
    
    return this.http.post<Vet>(this.url, JSON.stringify(pa));
  }
}
