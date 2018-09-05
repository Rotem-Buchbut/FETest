import { Injectable } from '@angular/core';
import { CanActivate, Router, Resolve } from '@angular/router';
import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';

@Injectable()
export class ProductsResolver implements Resolve<ProductsModel[]> {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  resolve(): Promise<ProductsModel[]> {
    return this.productsService.getProducts();
  }
}



