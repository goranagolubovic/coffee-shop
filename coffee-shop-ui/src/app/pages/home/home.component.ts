import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles.css']
})
export class HomeComponent implements OnInit {
  currentDayKey!: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getCurrentDay();
  }

  private getCurrentDay() {
    const currentDate = new Date();
    const day = this.datePipe.transform(currentDate, 'EEEE') || "";
    this.currentDayKey = `days.${day.toLowerCase()}`;
  }
}
