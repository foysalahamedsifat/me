import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent  implements OnInit, OnDestroy {
  countdown = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  };

  private intervalId: any;
  private targetDate = new Date();

  ngOnInit() {
    this.targetDate.setDate(this.targetDate.getDate() + 4); // 4 days from now
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    this.countdown.days = this.pad(days);
    this.countdown.hours = this.pad(hours);
    this.countdown.minutes = this.pad(minutes);
    this.countdown.seconds = this.pad(seconds);
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }
}
