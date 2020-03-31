import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms'; // 3 Importamos la libreria 

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // 1 Creamos el objeto validador del formulario
  checkoutForm;
  submitted = false;



  // 2 Agregamos el formBuilder a el contructor y agregar reglas de validacion
  constructor( private formBuilder: FormBuilder) { 
    this.submitted = true;

    this.checkoutForm = this.formBuilder.group({
      firstName:['', Validators.required],
      address:['', [Validators.required, Validators.email]],
    });

  }

  ngOnInit() {
  }

  onSubmit(customerData) { // 4 Capturamos el envio del formulario
    
    // stop here if form is invalid
    //if (this.checkoutForm.invalid) {
      //return;
    //}
    
    console.warn('Your order has been submitted', customerData);
    this.checkoutForm.reset(); 
    

  }

  //  get f() { return this.checkoutForm.controls; }

 

}

// 5 Crear el formulario
