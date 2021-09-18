import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: object;
  currentImage:string;


   product = 
     {'batterydescription': 'table', 'connectivity': 99,'operatingsystem':'twentytwenty', 'ram':.15*99,'maximumexpandablememory':800,'wirelessnetworktechnologygenerations':1,'supportedemailplatforms':'3',
     'weacapable': 'table','mobilehotspotcapable': 'table','frequency': 'table','weight': 'table','length': 'table','heigth': 'table','width': 'table' }   
  ;


  constructor() { }

  ngOnInit() {
    this.allProducts();
    console.log(this.product.batterydescription);
    this.currentImage='../../assets/Cell Phones/iPhone 11/iPhone 11 Black/Apple-iPhone-11-Black-frontimage.jpg';
  }

  allProducts() {
    this.productDetails = { productCategory: 'Watches', brandName: 'Samsung', productName: 'Galaxy Watch Active2 44mm', productImage: [
      '../../assets/Cell Phones/iPhone 11/iPhone 11 Black/Apple-iPhone-11-Black-frontimage.jpg',
      '../../assets/Cell Phones/iPhone 11/iPhone 11 Black/Apple-iPhone-11-Black-leftimage.jpg',
      '../../assets/Cell Phones/iPhone 11/iPhone 11 Black/Apple-iPhone-11-Black-rightimage.jpg',
      '../../assets/Cell Phones/iPhone 11/iPhone 11 Black/Apple-iPhone-11-Black-backimage.jpg'
    ],
  offer: 'Save up to $580 on iPhone 11 Pro Max. See how.', memory: ['64GB','128GB','256GB'],
  color: ['primary','info','dark','secondary'],
  productAvailability: true, productPrice: '500' }    
  }

  mainImage(mainImage){
    this.currentImage = mainImage;
  }

  

}
