
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'], providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() width: string = "sm:w-72 md:w-96";
  @Input() height: string = "h-16 sm:h-12 md:h-16";
  textareaValue: string = ""
  constructor() { }
  onChange = (value: string) => { };
  onTouched = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  ngOnInit(): void {
  }
}
