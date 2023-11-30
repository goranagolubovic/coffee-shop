import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() horizontalMargin: string = "";
  @Input() type: string = "button";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {

    this.buttonClick.emit();
  }
}
