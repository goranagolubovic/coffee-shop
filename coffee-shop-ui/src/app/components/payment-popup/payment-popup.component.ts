import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card/credit-card.service';
import { formatCreditCardData } from 'src/app/util';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: ['./payment-popup.component.css']
})
export class PaymentPopupComponent implements OnInit {
  formData: FormGroup = new FormGroup({
    nameOfUser: new FormControl(''),
    creditCardNumber: new FormControl(''),
    cvc2: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    postalCode: new FormControl(''),
    telephone: new FormControl(''),
  });
  showErrorCardDataMessage: boolean = false;
  shoErrorInsufficientFundsMessage: boolean = false;
  submitted = false;

  @Input() totalAmount!: number;
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelPopup: EventEmitter<void> = new EventEmitter<void>();

  constructor(private creditCardService: CreditCardService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group(
      {
        nameOfUser: ['', Validators.required],
        creditCardNumber: ['', Validators.required],
        cvc2: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        country: ['', Validators.required],
        postalCode: ['', Validators.required],
        telephone: ['', Validators.required],
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }

  onClosePopup() {
    this.closePopup.emit();
  }
  onCancelPopup() {
    this.cancelPopup.emit();
  }
  onSubmit() {
    this.submitted = true;
    this.showErrorCardDataMessage = false;
    this.shoErrorInsufficientFundsMessage = false;
    const creditCard = formatCreditCardData(this.formData.value);
    this.creditCardService.checkCreditCard(creditCard).pipe(
      catchError((error) => {
        if (error.status === 404) {
          this.showErrorCardDataMessage = true;
        } else {
          console.error(error);

        }
        return ''
      })
    )
      .subscribe(() => {
        this.creditCardService.updateCreditCardBalance(this.totalAmount, this.formData.get("creditCardNumber")?.value).pipe(
          catchError((error) => {
            if (error.status === 400) {
              this.shoErrorInsufficientFundsMessage = true;
            } else {
              console.error(error);

            }
            return ''
          })
        ).subscribe(() => {
          this.closePopup.emit();
        })
      });

  }

}
