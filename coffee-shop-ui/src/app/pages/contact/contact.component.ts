import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import { formatFormData } from 'src/app/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../styles.css']
})
export class ContactComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    message: '',
  };

  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  onSubmit() {
    const message = formatFormData(this.formData);
    this.contactService.createMessage(message).subscribe((data) => {
    });
    this.openPopup()
  }
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

}
