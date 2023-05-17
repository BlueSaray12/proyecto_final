import { Component } from '@angular/core';
import { OfertasService } from 'src/app/servicios/ofertas/ofertas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private servicio: OfertasService) { }

  guardarOfertas(id: string, nombreProducto: string, marca: string, detalle: string, precio_normal: string, precio_oferta: string) {
    const temp = {
      "id": id,
      "nombreProdcuto": nombreProducto,
      "marca": marca,
      "detalle":detalle,
      "precio_normal": precio_normal,
      "precio_oferta": precio_oferta,

    }

    this.servicio.postOfertas(temp).subscribe(u => { })

  }

  actualizarOfertas(id: string, nombreProducto: string, marca: string, detalle: string, precio_normal: string, precio_oferta: string) {
    const ide: number = parseInt(id)
    const temp = {
      "id": ide,
      "nombreProdcuto": nombreProducto,
      "marca": marca,
      "detalle":detalle,
      "precio_normal": precio_normal,
      "precio_oferta": precio_oferta,
    }

    this.servicio.putOfertas(temp, id).subscribe(u => { })
  }


  eliminarOfertas(id: string) {
    const ide: number = parseInt(id)
    this.servicio.deleteOfertas(ide).subscribe(u => { })


  }
}

