import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: any[] = [];
  productsToDisplay: any[] = [];

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.data.subscribe((data) => {
    //   this.db.list('products').valueChanges().subscribe((products: any) => {
    //     this.products = products;
    //     products.forEach((product) => {
    //       if (product.productFamilyCategory === data.productType) {
    //         this.productsToDisplay.push(product);
    //       }
    //     });
    //   });
    // });
  }

  openNav() {
    document.getElementById("myNav1").style.height = "100%";
  }

  closeNav() {
    document.getElementById("myNav1").style.height = "0%";
  }

}
