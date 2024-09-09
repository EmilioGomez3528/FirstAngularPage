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

    return new Promise<void> ( (resolve, reject) => {
      this.http.get('https://angular-html-9172a-default-rtdb.firebaseio.com/productos_idx.json') 
      .subscribe( (resp: any) => {

        this.products = resp;
        this.loading = false;
        resolve();
  });

    });


  }

  getProducts (id: string) {
    return this.http.get(`https://angular-html-9172a-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }


  searchProduct(termino: string) {
  
    if (this.products.length === 0) {
      this.loadProducts().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  

    this.filterProducts = this.products.filter( products => {
      return true;
    });

    console.log(this.filterProducts);

  }

  private filtrarProductos(termino: string) {

    this.filterProducts = [];
    termino = termino.toLowerCase();

    this.products.forEach(prod => {

      const lowerTittle = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || lowerTittle.indexOf(termino)>= 0) {
        this.filterProducts.push(prod);
      }
    });
  }



}
