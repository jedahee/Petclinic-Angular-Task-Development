import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public url: string = "http://localhost/AJAX_M/ServicioWeb/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  getOwners() {
    let pa = {
      accion: "ListarOwners",
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}
