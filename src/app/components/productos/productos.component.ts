import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicio: ProductosService){

  }
  dataProductos:any={};
  ngOnInit(){
    this.servicio.getProductos().subscribe( productos =>{
        this.dataProductos=productos;
      })
    }
  }


