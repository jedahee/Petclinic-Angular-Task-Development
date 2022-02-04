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
}
