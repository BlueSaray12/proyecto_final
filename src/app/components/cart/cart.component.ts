import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private servicio: CarritoService, private routert: Router) {

  }
  dataCarrito: any = {};
  ngOnInit() {
    this.servicio.getCarrito().subscribe(carrito => {
      this.dataCarrito = carrito;
    })
  }


  calcularTotal(): number {
    let total = 0;
    for (const item of this.dataCarrito) {
      const precio = parseFloat(item.precio);
      if (!isNaN(precio)) {
        total += precio;
      }
    }
    return total;
  }

  eliminarCarrito(id: string) {
    const ide: number = parseInt(id)
    this.servicio.deleteCarrito(ide).subscribe(u => { })
    location.reload();
  }
  eliminarCarritoExito(id: string) {
    const ide: number = parseInt(id)
    this.servicio.deleteCarrito(ide).subscribe(u => { })
  }

  realizarCompra(): void {
    if (this.dataCarrito.length > 0) {
      // Lógica para realizar la compra

      // Obtener los IDs de los elementos del carrito
      const ids: number[] = this.dataCarrito.map((item: any) => item.id);

      // Eliminar elementos del carrito
      for (const id of ids) {
        this.eliminarCarritoExito(id.toString());
      }

      // Redirigir a la página principal
      this.routert.navigate(['/home']);

      // Mostrar mensaje de éxito
      alert('¡La compra se ha realizado con éxito!');
    } else {
      // Mostrar mensaje de añadir productos al carrito
      alert('Añadir productos al carrito');
    }
  }





}
