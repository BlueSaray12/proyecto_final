import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NickService {

  constructor( private http:HttpClient) { }
  

  private API_NICK="http://localhost:3000/user"

  getNick():Observable<any>{
    return this.http.get(this.API_NICK);
  }
}