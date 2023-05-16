import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }
  private API_Ofertas='http://localhost:3000/ofertas'

  getOfertas(): Observable <any>{
    return this.http.get(this.API_Ofertas)
  }
}
