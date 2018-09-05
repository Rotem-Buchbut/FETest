import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsModel } from './products.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditProductsDialog } from './edit-products.dialog';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';


@Component({
  templateUrl: './products.component.html',
  styles: [`
    .mat-menu-panel {
      max-width: 1000px !important;
      padding: 0 20px;
      margin: 5px 0;
    }
    .add {
      color: lime;
    }
    .info {
      color: #aaa;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'sku', 'cost', 'actions'];
  dataSource: Array<ProductsModel>;
  subs: Array<Subscription> = [];

  constructor(route: ActivatedRoute,
    private dialog: MatDialog,
    private productsService: ProductsService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = route.snapshot.data['list'] as Array<ProductsModel>;
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

  addProduct() {
    const dialogRef = this._getDialog(new ProductsModel(), false);
    this.subs.push(dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.productsService.addProduct(result).then(newProduct => {
        const list = this.dataSource;

        // ===================================================
        // tslint:disable-next-line:max-line-length
        // After editing i noticed the object I was recieved is diferent from the object i editing.
        // so i presented the object with the fields i edited.
        result.id = newProduct.id;
        // ===================================================
        this.dataSource = [result, ...list];
        this._notify('The product was added successfully');
      })
      .catch((err) => {
        this._notify('The adding failed');
      });
    }));
  }

  editProduct(product: ProductsModel) {
    const dialogRef = this._getDialog(product, true);
    this.subs.push(dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.productsService.editProduct(result).then(newProduct => {
        const index = this.dataSource.findIndex((p) => p.id === product.id);
        const list = this.dataSource;
        list[index] = newProduct;
        this.dataSource = [...list];
        this._notify('The product was edited successfully');
      })
      .catch((err) => {
        this._notify('The editing failed');

      });
    }));
  }

  removeProduct(product: ProductsModel) {

    if (confirm(`Do you realy want to remove product ${product.name}?`)) {
      const id = product.id;
      this.productsService.removeProduct(id).then(newProduct => {
        const index = this.dataSource.findIndex((p) => p.id === id);
        const list = this.dataSource;
        list.splice(index, 1);
        this.dataSource = [...list];
        this._notify('The product was removed successfully');
      })
      .catch((err) => {
         this._notify('The deletion failed');

      });
    };

  }

  private _getDialog(product: ProductsModel, editMode: boolean) {
    return this.dialog.open(EditProductsDialog, {
      width: '450px',
      data: {product, editMode},
    });
  }

  private _notify(message: string): void {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}
