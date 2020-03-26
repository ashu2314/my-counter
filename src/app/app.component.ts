import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  counter: any = {};
  daysRGB: any = {r : 240, g: 248, b: 255};
  hoursRGB: any = {r : 240, g: 248, b: 255};
  minutesRGB: any = {r : 240, g: 248, b: 255};
  secondsRGB: any = {r : 240, g: 248, b: 255};
  styles: any = {
    daysStyle: {'background-color':`rgb(${this.daysRGB.r}, ${this.daysRGB.g}, ${this.daysRGB.b})`},
    hoursStyle: {'background-color':`rgb(${this.hoursRGB.r}, ${this.hoursRGB.g}, ${this.hoursRGB.b})`},
    minutesStyle: {'background-color':`rgb(${this.minutesRGB.r}, ${this.minutesRGB.g}, ${this.minutesRGB.b})`},
    secondsStyle: {'background-color':`rgb(${this.secondsRGB.r}, ${this.secondsRGB.g}, ${this.secondsRGB.b})`},
  };


  ngOnInit(): void {
    this.counter = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    setInterval(this.getTime.bind(this), 1000);
    
  }

  private getTime(){
    let endDate = new Date("2020-04-30 17:00:00")
    let diff = endDate.getTime() - new Date().getTime();
    this.counter.days = Math.floor(diff / (60 * 60 * 24 * 1000));
    this.counter.hours = Math.floor(diff / (60 * 60 * 1000)) - (this.counter.days * 24);
    this.counter.minutes = Math.floor(diff / (60 * 1000)) - ((this.counter.days * 24 * 60) + (this.counter.hours * 60));
    this.counter.seconds = Math.floor(diff / 1000) - ((this.counter.days * 24 * 60 * 60) + (this.counter.hours * 60 * 60) + (this.counter.minutes * 60));

    //his.styles.daysStyle = {'background-color':`rgb(${220 + this.counter.days % 100 * 3}, ${175 - this.counter.days % 100 * 7}, 0)`};
    //this.styles.hoursStyle = {'background-color':`rgb(${80 + this.counter.hours * 7}, ${175 - this.counter.hours * 9}, 0)`};
    //this.styles.minutesStyle = {'background-color':`rgb(${15 + this.counter.minutes * 4}, ${175 - this.counter.minutes * 2}, 0)`};
    //this.styles.secondsStyle = {'background-color':`rgb(${15 + this.counter.seconds * 4}, ${175 - this.counter.seconds * 2}, 0)`};

    this.daysRGB.g = 255 - this.counter.days * 2;
    this.daysRGB.r = this.daysRGB.g < 210 ? 255 : this.counter.days * 2;
    this.daysRGB.b = this.daysRGB.g < 150 ? 0 : 50 + this.counter.days * 2;
    this.styles.daysStyle = {'background-color':`rgb(${this.daysRGB.r}, ${this.daysRGB.g}, ${this.daysRGB.b})`};
    
    this.hoursRGB.g = 255 - this.counter.hours * 6;
    this.hoursRGB.r = this.hoursRGB.g < 210 ? 255 : this.counter.hours * 6;
    this.hoursRGB.b = this.hoursRGB.g < 150 ? 0 : 40 + this.counter.hours * 2;
    this.styles.hoursStyle = {'background-color':`rgb(${this.hoursRGB.r}, ${this.hoursRGB.g}, ${this.hoursRGB.b})`};
    
    this.minutesRGB.g = 255 - this.counter.minutes * 4;
    this.minutesRGB.r = this.minutesRGB.g < 210 ? 255 : this.counter.minutes * 4;
    this.minutesRGB.b = this.minutesRGB.g < 150 ? 0 : 20 + this.counter.minutes;
    this.styles.minutesStyle = {'background-color':`rgb(${this.minutesRGB.r}, ${this.minutesRGB.g}, ${this.minutesRGB.b})`};
    
    this.secondsRGB.g = 255 - this.counter.seconds * 4;
    this.secondsRGB.r = this.secondsRGB.g < 210 ? 255 : this.counter.seconds * 4;
    this.secondsRGB.b = this.secondsRGB.g < 150 ? 0 : 20 + this.counter.seconds;
    this.styles.secondsStyle = {'background-color':`rgb(${this.secondsRGB.r}, ${this.secondsRGB.g}, ${this.secondsRGB.b})`};
    
    console.log(this.styles);
  }


  
        
}
