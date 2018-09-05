import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProductsService } from './products/products.service';
import { ProductsGuard } from './products/products.guard';
import { ProductsResolver } from './products/products.resolver';
import { EditProductsDialog } from './products/edit-products.dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    EditProductsDialog,
  ],
  providers: [ProductsService, ProductsGuard, ProductsResolver],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  entryComponents: [
    EditProductsDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
