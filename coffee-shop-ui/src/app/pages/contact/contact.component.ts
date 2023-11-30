import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ContactService } from 'src/app/services/contact/contact.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../styles.css']
})
export class ContactComponent implements OnInit {
  formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    message: new FormControl(''),
    email: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group(
      {
        name: ['', Validators.required],
        message: ['', Validators.required,],
        email: ['', [Validators.required, Validators.email]],

      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }

  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  onSubmit() {
    this.submitted = true;
    const message = new Message(this.formData.get("name")?.value, this.formData.get("email")?.value, this.formData.get("message")?.value)
    this.contactService.createMessage(message).subscribe(() => {
    });
    this.openPopup()
  }


}
