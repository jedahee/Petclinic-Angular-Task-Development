import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}
