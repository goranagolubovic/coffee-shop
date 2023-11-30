import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-amount-picker',
  templateUrl: './amount-picker.component.html',
  styleUrls: ['./amount-picker.component.css']
})
export class AmountPickerComponent implements OnInit {
  @Input() value: number = 1;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();



  constructor() { }

  ngOnInit(): void {
  }

  increase(): void {
    this.value = this.value + 1;
    this.valueChange.emit(this.value);
  }

  decrease(): void {
    if (this.value > 1) {
      this.value = this.value - 1;
      this.valueChange.emit(this.value);
    }
  }
}

