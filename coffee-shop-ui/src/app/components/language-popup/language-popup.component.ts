import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-language-popup',
  templateUrl: './language-popup.component.html',
  styleUrls: ['./language-popup.component.css'],
})

export class LanguagePopupComponent implements OnInit {
  isOpen: boolean = true;
  @Output("onToggleEvent") onButtonClick = new EventEmitter<boolean>();


  constructor(public translate: TranslateService) {

  }
  switchLang(lang: string) {
    this.translate.use(lang)
  }

  togglePopup(language: string) {
    this.isOpen = false;
    this.onButtonClick.emit(this.isOpen);
    this.switchLang(language)
  }

  ngOnInit(): void {
    this.isOpen = true;
  }

}
