import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor( private http:HttpClient) { }


  private API_CARRITO="http://localhost:3000/cart"

  getCarrito():Observable<any>{
    return this.http.get(this.API_CARRITO);
  }

  postCarrito(user: any): Observable<any>{
    return this.http.post(this.API_CARRITO, user)
  }
  deleteCarrito(id:number) : Observable <any>{
    this.API_CARRITO=`${this.API_CARRITO}/${id}`
    return this.http.delete(this.API_CARRITO)
  }
}
