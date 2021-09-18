import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'cell-phones', component: ProductsComponent, data : {productType : 'CELLPHONES'}},
  {path: 'tablets', component: ProductsComponent, data : {productType : 'TABLETS'}},
  {path: 'smart-watches', component: ProductsComponent, data : {productType : 'SMARTWATCHES'}},
  {path: 'accessories', component: ProductsComponent, data : {productType : 'ACCESSORIES'}},
  {path: 'bring-your-own-device', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
