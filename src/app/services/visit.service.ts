import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../models/visit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getVisits(id: number) {
    let pa = {
      accion: "ListarVisitasPet",
      id: id
    }
    
    return this.http.post<Visit[]>(this.url, JSON.stringify(pa));
  }

  getVisitById(id: number) {
    let pa = {
      accion: "ObtenerVisitId",
      id: id
    }
    
    return this.http.post<Visit>(this.url, JSON.stringify(pa));
  }

  addVisit(visit: Visit) {
    let pa = {
      accion: "AnadeVisit",
      visit: visit
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  delVisit(id: number) {
    let pa = {
      accion: "BorraVisit",
      id: id
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  editVisit(visit: Visit) {
    let pa = {
      accion: "ModificaVisit",
      visit: visit
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

}
