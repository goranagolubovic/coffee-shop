import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() imageStyle: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() price: string = "";
  @Input() imageUrl: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
