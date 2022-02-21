import { Specialty } from './../models/specialty';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSpecialties() {
    let pa = {
      accion: "ListarSpecialties",
    }
    return this.http.post<Specialty[]>(this.url, JSON.stringify(pa));
  }

  addSpecialty(specialty: Specialty) {
    let pa = {
      accion: "AnadeSpecialty",
      specialty: specialty
    }
    return this.http.post<Specialty>(this.url, JSON.stringify(pa));
  }
}
