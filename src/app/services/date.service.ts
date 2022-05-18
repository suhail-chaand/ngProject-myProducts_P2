import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  date = new Date()

  todayISO: string = this.date.toISOString().split('T')[0]

  fetchGreeting(): string {
    let greeting: string = ''
    let hour = this.date.getHours();
    if (hour < 12) {
      greeting = 'Good Morning'
    }
    else if (hour >= 12 && hour < 17) {
      greeting = 'Good Afternoon'
    }
    else if (hour >= 17) {
      greeting = 'Good Evening'
    }
    return greeting
  }
}
