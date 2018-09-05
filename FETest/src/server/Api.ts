import { environment } from '../environments/environment';

export class Api {

  static getProducts(): string {
    return environment.cloudonixUrl + '/items';
  }

  static addProduct(): string {
    return environment.cloudonixUrl + '/items';
  }

  static editProduct(id: number): string {
    return environment.cloudonixUrl + `/items/${id}`;
  }

  static removeProduct(id: number): string {
    return environment.cloudonixUrl + `/items/${id}`;
  }


}
