import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
imageWidth: number = 50;
imageMargins: number = 2;
products : any[] =[
  {
            "rating": 4,
            "numReviews": 8,
            "price": 25000,
            "countInStock": 7,
            "_id": "5fe26b999dfa0f4b0cbe0adf",
            "name": "Portrait of Adele Bloch-Bauer II",
            "image": "assets/product-images/adele.png",
            "description": "Portrait of Adele Bloch-Bauer II",
            "brand": "Picture Arts",
            "category": "Arts",
            "user": "5fe26b999dfa0f4b0cbe0adb",
            "reviews": [],
            "__v": 0,
            "createdAt": "2020-12-22T21:56:41.146Z",
            "updatedAt": "2020-12-22T21:56:41.146Z"
        },
        {
            "rating": 5,
            "numReviews": 12,
            "price": 2000,
            "countInStock": 11,
            "_id": "5fe26b999dfa0f4b0cbe0ae1",
            "name": "False Start",
            "image": "assets/product-images/false.png",
            "description": "Beautfull Art by False Start",
            "brand": "Picture Arts",
            "category": "Arts",
            "user": "5fe26b999dfa0f4b0cbe0adb",
            "reviews": [],
            "__v": 0,
            "createdAt": "2020-12-22T21:56:41.146Z",
            "updatedAt": "2020-12-22T21:56:41.146Z"
        },
]

showImage: boolean = false;

toggleImage () {
  this.showImage = !this.showImage
  console.log("hello")
}
  constructor() { }


  ngOnInit(): void {
  }

}
