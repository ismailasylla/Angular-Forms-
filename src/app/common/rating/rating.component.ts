import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  max: number = 10;
  @Input()
  rate!: number;
  isReadonly: boolean = true;
  starWidth: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.starWidth = this.rate * 75 / 5;
  }

  onClick (): void {
    console.log(`The rating ${this.rate} was clicked!`)
  }

}
