import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  items: any = []



  producto: Productos = {
    id: 1,
    name: 'Papa'
  };

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.addToCart(1);
    this.addToCart(2);
    console.log(this.producto)

  }

  addToCart(product) {
    this.productosService.addToCart(product);
    console.log('Exito');
    this.getItems();
  }

  getItems() {
    console.log(this.productosService.getItems());
  }


}
