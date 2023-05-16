import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  private API_PRODUCTOS='http://localhost:3000/Productos'

  getProductos(): Observable <any>{
    return this.http.get(this.API_PRODUCTOS)
  }
}
