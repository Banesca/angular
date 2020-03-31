import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  checkoutForm;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      nameProduct:['', Validators.required],
      price:['', [Validators.required]],
    });

   }

  ngOnInit() {
  }

  onSubmit(customerData) { // 4 Capturamos el envio del formulario
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      return;
    }
    
    
    console.warn('Your order has been submitted', customerData);
    this.checkoutForm.reset(); 
    this.submitted = false;

    
  }

  // Obtengo el control de las validaciones del formulario
  get f() { return this.checkoutForm.controls; }

  test(){
    alert()
  }

}
