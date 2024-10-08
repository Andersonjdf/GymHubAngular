import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  // URL del API, definida en enviroments->enviroment.ts
  urlAPI: string = environment.apiURL;
  //Información usuario actual
  currentUser: any;

  //Inyectar cliente HTTP para las solicitudes al API
  constructor(private http: HttpClient) {
   
  }
 
  // Listar
  //http://localhost:3000/videojuego
  list(endopoint: string): Observable<any> {
    return this.http.get<any>(this.urlAPI + endopoint);
  }
  // Obtener
  get(endopoint: string, filtro: any): Observable<any | any[]> {
    return this.http.get<any | any[]>(this.urlAPI + endopoint + `/${filtro}`);
  }
  // crear
  create(endopoint: string, objCreate: any | any): Observable<any | any[]> {
    return this.http.post<any | any[]>(this.urlAPI + endopoint, objCreate);
  }
  // actualizar
  update(endopoint: string, objUpdate: any | any): Observable<any | any[]> {
    return this.http.put<any | any[]>(
      this.urlAPI + endopoint + `/${objUpdate.id}`,
      objUpdate
    );
  }
  updateCustom(endpoint: string, objUpdate: any): Observable<any | any[]> {
    return this.http.put<any | any[]>(
      this.urlAPI + endpoint,
      objUpdate
    );
  }
  filterCitas(endpoint: string, params: any): Observable<any> {
    return this.http.get<any>(this.urlAPI + endpoint, { params });
  }
  getCitaDetalles(id: number): Observable<any> {
    return this.get('citas/detalle', id);
  }
  createCita(cita: any): Observable<any> {
    return this.create('citas', cita);
  }
  updateCitaEstado(cita: any): Observable<any> {
    return this.update('citas', cita);
  }
}
