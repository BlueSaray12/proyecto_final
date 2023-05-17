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
  postOfertas(user: any): Observable<any>{
    return this.http.post(this.API_Ofertas, user)
  }

  //METODO PUT/UPDATE
  putOfertas(user:any, id:string):Observable<any>{
    
    this.API_Ofertas=`${this.API_Ofertas}/${id}`
    return this.http.put(this.API_Ofertas, user)

  }
  //METODO DELETE
    deleteOfertas(id:number) : Observable <any>{
      this.API_Ofertas=`${this.API_Ofertas}/${id}`
      return this.http.delete(this.API_Ofertas)
    }
}
