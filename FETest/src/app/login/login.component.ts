import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      key: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    this.productsService.setKey(this.myForm.value.key);
    this.router.navigateByUrl('/products');
  }

  ngOnDestroy(): void {

  }

}
