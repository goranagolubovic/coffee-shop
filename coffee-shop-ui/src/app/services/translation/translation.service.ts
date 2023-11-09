import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor() {
    this.initializeLanguage();
  }

  setLanguage(language: string): void {
    document.documentElement.lang = language; // Set the language on the HTML element
    localStorage.setItem('language', language);
  }

  getCurrentLanguage(): string {
    return document.documentElement.lang || 'en'; // Use the language set on the HTML element
  }

  private initializeLanguage(): void {
    const storedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.slice(0, 2); // Default to the browser's language

    const languageToUse = storedLanguage || browserLanguage || 'en'; // Fallback to English

    this.setLanguage(languageToUse);
  }
}
