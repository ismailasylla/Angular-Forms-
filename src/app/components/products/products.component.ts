import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/data/Products';
import {ProductService} from 'src/app/services/product.service'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  imageWidth: number = 50;
  imageMargins: number = 2;
  showImage: boolean = false;

  toggleImage () {
    this.showImage = !this.showImage
    console.log("hello")
  }

  constructor(private ProductService : ProductService) {
    
  }
  
    products: IProduct[] = []
    ngOnInit(): void {
      this.products = this.ProductService.getProducts();
    }

}
