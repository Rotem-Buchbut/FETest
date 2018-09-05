import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Api } from 'src/server/Api';
import { ProductsModel } from './products.model';


@Injectable()
export class ProductsService {

  private _secretKey: string;

  constructor(private http: HttpClient) { }

  haveKey(): boolean {
    return !!this._secretKey;
  }

  setKey(key: string) {
    this._secretKey = key;
  }

  getProducts(): Promise<ProductsModel[]> {

    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._secretKey });
    return this.http.get(Api.getProducts(), { headers })
      .toPromise()
      .then((products) => products)
      .catch(err => {
        console.log(err);
        return null;
      });
  }

  addProduct(product: ProductsModel): Promise<ProductsModel> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._secretKey });
    return this.http.post(Api.addProduct(), product, { headers })
    .toPromise()
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  editProduct(product: ProductsModel): Promise<ProductsModel> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._secretKey });
    return this.http.patch(Api.editProduct(product.id), product, { headers })
    .toPromise()
    .then((products) => products)
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  removeProduct(id: number): Promise<ProductsModel> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._secretKey });
    return this.http.delete(Api.removeProduct(id), { headers })
    .toPromise()
    .then((products) => products)
    .catch(err => {
      console.log(err);
      return null;
    });
  }


}


