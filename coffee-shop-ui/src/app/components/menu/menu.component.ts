import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() isClicked: boolean = false;

  openSettings() {
    this.isClicked = !this.isClicked;
  }
  onToggleEvent(isEnabled: any) {
    this.isClicked = isEnabled;
  }
  constructor() { }

  ngOnInit(): void {

  }

}
