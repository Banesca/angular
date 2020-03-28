import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Clientes } from 'src/app/interfaces/clientes';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cliente: Clientes
  cliente2: Clientes
  cliente3: Clientes

  listaClientes:Clientes [] = [];

  nombre: String = "jorge luis"

  constructor(private productosService: ProductosService) { }

  ngOnInit() {

    this.productosService.addToCart("tomate")
    this.productosService.addToCart("pera")
    console.log(this.productosService.getItems());
    this.productosService.clearCart();
    console.log("luego de eliminar todo")
    console.log(this.productosService.getItems());

    this.cliente = {
      idCliente: 1,
      nombre: "bioonix ",
      apellido: "ejemplo"
     }

     this.cliente2 = {
      idCliente: 2,
      nombre: "bioonix ",
      apellido: "ejemplo"
     }

     this.cliente3 = {
      idCliente: 3,
      nombre: "bioonix ",
      apellido: "ejemplo"
     }

     this.listaClientes.push(this.cliente)
     this.listaClientes.push(this.cliente2)
     this.listaClientes.push(this.cliente3)

     console.log(this.listaClientes)

     console.log(this.cliente.nombre)
  }

}
