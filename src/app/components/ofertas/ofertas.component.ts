import { Component } from '@angular/core';
import { OfertasService } from 'src/app/servicios/ofertas/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  constructor(private servicio: OfertasService){

  }
  dataOfertas:any={};
  ngOnInit(){
    this.servicio.getOfertas().subscribe( ofertas =>{
        this.dataOfertas=ofertas;
      })
    }
}
