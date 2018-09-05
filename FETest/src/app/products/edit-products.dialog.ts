import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductsModel } from './products.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fet-products-dialog',
  templateUrl: './edit-products.dialog.html',
  styles: [`
    .full-width {
      width: 100%;
    }
    .right-direction {
      direction: rtl;
    }
  `]
})
// tslint:disable-next-line:component-class-suffix
export class EditProductsDialog {

  myForm: FormGroup;
  productId: number;
  sku: string;
  editMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<EditProductsDialog>,
    @Inject(MAT_DIALOG_DATA) data: {product: ProductsModel, editMode: boolean}
  ) {
    this.editMode = data.editMode,
    this.productId = data.product.id,
    this.myForm = new FormGroup({
      name: new FormControl(data.product.name),
      description: new FormControl(data.product.description),
      sku: new FormControl(data.product.sku),
      cost: new FormControl(data.product.cost)
    });

    if (this.editMode) {
      this.myForm.get('sku').disable();
    }
  }

  onSubmit(): void {
    const productsModel = this.myForm.value as ProductsModel;
    productsModel.id = this.productId;
    if (this.editMode) {
      productsModel.sku = this.sku;
    }
    this.dialogRef.close(productsModel);
  }

  onCancel($event: Event): void {
    this.dialogRef.close();
    $event.preventDefault();
  }
}
