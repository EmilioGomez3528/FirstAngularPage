import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: Producto[] = [];
  filterProducts: Producto[] = [];


  constructor( private http: HttpClient ) { 
    this.loadProducts();
  }

  private loadProducts() {

    this.http.get('https://angular-html-9172a-default-rtdb.firebaseio.com/productos_idx.json') 
        .subscribe( (resp: any) => {

          this.products = resp;
          this.loading = false;

    });
  }

  getProducts (id: string) {
    return this.http.get(`https://angular-html-9172a-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }


  searchProduct(termino: string) {
   this.filterProducts = this.products.filter( products => {
      return true;
    });

    console.log(this.filterProducts);

  }

}
