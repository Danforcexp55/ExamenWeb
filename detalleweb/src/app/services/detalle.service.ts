import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Detalle } from '../models/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private url = "Detalle";
  constructor(private http: HttpClient) { }

  public getDetalles() : Observable<Detalle[]>{
   return this.http.get<Detalle[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateDetalle(deta: Detalle) : Observable<Detalle[]>{
    return this.http.put<Detalle[]>(`${environment.apiUrl}/${this.url}`, deta);
   }

   public createDetalle(deta: Detalle) : Observable<Detalle[]>{
    return this.http.post<Detalle[]>(`${environment.apiUrl}/${this.url}`, deta);
   }

   public deleteDetalle(deta: Detalle) : Observable<Detalle[]>{
    return this.http.delete<Detalle[]>(`${environment.apiUrl}/${this.url}/${deta.id}`);
   }

}
