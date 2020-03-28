import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetailComponent } from './component/product/detail/detail.component';
import { CarritoComponent } from './component/product/carrito/carrito.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'obtenerproducto/:productId', component: DetailComponent },
  { path: 'carrito', component: CarritoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
