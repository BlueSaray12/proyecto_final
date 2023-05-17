import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NickService } from 'src/app/servicios/register/nick.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private servicio: NickService, private ruta: Router){}
  

  nick:string=""
  pass:string=""

  guardarJSON(){
    const temp={
      id: this.nick,
      pass: this.pass
    }
    this.limpiar()
    
    return temp;
  }

  //LIMPIAR INPUTS
  limpiar(){
    this.nick=""
    this.pass=""
  }

  login(){
    const aux= this.guardarJSON()

    this.servicio.getNick().subscribe( p=>{
      for( const doc of p ){
        if( JSON.stringify(doc) == JSON.stringify(aux) ){
          console.log("Encontrado")
          localStorage.setItem('login', 'true')
          this.ruta.navigate(['/formulario'])
          break;
        }else{
          localStorage.setItem('login','false')
          this.ruta.navigate(['/register'])
        }
      }
    })

  }
}

