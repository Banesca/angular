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
import { PersonaComponent } from './formularios/persona/persona.component';
import { ProductoComponent } from './formularios/producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    FooterComponent,
    ProductosComponent,
    DetailComponent,
    CarritoComponent,
    PersonaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Paso 6 Formulario importar FormsModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
