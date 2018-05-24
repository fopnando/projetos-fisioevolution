import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

import { AuthenticationService } from '../../_services/index';

// importando serviços de cadastro cliente
import { ProductService } from '../../service/product.service';

// importando formularios
import { NgForm } from '@angular/forms';

// importando product class
import { Product } from '../../models/product';

@Component({
  moduleId: module.id,
   selector: 'app-cad-cli',
  templateUrl: './cad-cli.component.html',
  styleUrls: ['./cad-cli.component.css'],
  providers: [ CadcliComponent ]
})

export class CadcliComponent implements OnInit {
   constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private productService: ProductService) {}

  ngOnInit() {
    // reset login status
     this.authenticationService.logout();
     this.productService.getProducts();
     this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    alert('entrou na funçao salvar');
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);

  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
    }
    this.productService.selectedProduct = new Product();
  }
}



