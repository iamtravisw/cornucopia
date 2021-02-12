import { Component } from '@angular/core';

export type UserPosition = "start" | "end";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'cornucopia';

  
nav_position: UserPosition =  'end';

constructor() { }

onTogglePosition(position: string) {
  this.nav_position = position === 'start' ? 'end' : 'start';
  
  }
}
