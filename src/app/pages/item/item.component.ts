import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDesc } from 'src/app/interfaces/product-desc.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{



  constructor( private route: ActivatedRoute, public productoService: ProductosService) {
    
  }

  product: ProductDesc = {} as ProductDesc;
  id: string = '';




ngOnInit() {
  this.route.params.subscribe(parametros => {
    this.productoService.getProducts(parametros['id'])
      .subscribe((producto: any) => {
        this.id = parametros ['id'];
        this.product = producto;
      });
  });
}
}