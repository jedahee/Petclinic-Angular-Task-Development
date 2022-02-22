import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getOwners() {
    let pa = {
      accion: "ListarOwners",
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  getOwnerByID(ownerID: number) {
    let pa = {
      accion: "ObtenerOwnerId",
      id: ownerID,
    }
    
    return this.http.post<Owner>(this.url, JSON.stringify(pa));
  }

  addOwner(owner: Owner) {
    let pa = {
      accion: "AnadeOwner",
      owner: owner,
    };

    return this.http.post<Owner[]>(this.url, JSON.stringify(pa));
  }

  editOwner(owner: Owner) {
    let pa = {
      accion: "ModificaOwner",
      owner: owner,
    };

    return this.http.post<Owner[]>(this.url, JSON.stringify(pa));
  }

  deleteOwner(id: number) {
    let pa = {
      accion: "BorraOwner",
      listado: "OK",
      id: id,
    };

    return this.http.post<Owner[]>(this.url, JSON.stringify(pa));
  }

}
