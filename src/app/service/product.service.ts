import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import { Product } from '../models/product';

@Injectable()
export class ProductService {


  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  getProducts() {
    alert('chamou a funcao produto');
   return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product) {
    alert('inserindo dados na base ');
      this.productList.push({
        name: product.name,
        categoria: product.categoria,
        localizacao: product.localizacao,
        preco: product.preco
      });
    }

  updateProduct(product: Product) {
       this.productList.update(product.$key, {
        name: product.name,
        categoria: product.categoria,
        localizacao: product.localizacao,
        preco: product.preco

  });
}

deleteProduct($key: string) {
  this.productList.remove($key);
}
  constructor(private firebase: AngularFireDatabase) { }

}
