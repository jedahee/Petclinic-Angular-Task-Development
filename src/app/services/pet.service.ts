import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPetsByIdOwner(id: number) {
    let pa = {
      accion: "ListarPetsOwnerId",
      id: id
    }
    
    return this.http.post<Pet[]>(this.url, JSON.stringify(pa));
  }

  getPetById(id: number) {
    let pa = {
      accion: "ObtenerPetId",
      id: id
    }

    return this.http.post<Pet>(this.url, JSON.stringify(pa));
  }

  addPet(pet: Pet) {
    let pa = {
      accion: "AnadePet",
      pet: pet
    }

    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  editPet(pet: Pet) {
    let pa = {
      accion: "ModificaPet",
      pet: pet
    }

    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}
