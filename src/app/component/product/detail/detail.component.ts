import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idProducto:String = ''
  numero1 = 0
  numero2 = 200

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idProducto = params.get('productId');
      console.log("Este es el id:"+this.idProducto);

      const suma = this.numero1 + this.numero2;
      console.log(suma);
    });
  }

}
