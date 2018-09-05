import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsGuard implements CanActivate {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.productsService.haveKey()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

