import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from  './component/header/header.component';
import { TestComponent } from './pages/test/test.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetailComponent } from './component/product/detail/detail.component';
import { CarritoComponent } from './component/product/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    FooterComponent,
    ProductosComponent,
    DetailComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
