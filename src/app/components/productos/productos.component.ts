import { Component } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicio1: ProductosService, private servicio2: CarritoService, private router:Router) {

  }
  dataProductos: any = {};
  ngOnInit() {
    this.servicio1.getProductos().subscribe(productos => {
      this.dataProductos = productos;
    })
  }

  guardarCarrito(id: string, nombre_producto: string, marca: string, detalle: string, precio: string) {
    const temp = {
      "id": id,
      "nombre_producto": nombre_producto,
      "marca": marca,
      "detalle": detalle,
      "precio": precio,
    }

    this.servicio2.postCarrito(temp).subscribe(u => { })

    this.router.navigate(['/carrito']);

  }

}
