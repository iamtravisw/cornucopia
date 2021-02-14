import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cornucopia';

  show = false;
constructor() { }

ngOnInit(): void {
  if(localStorage.getItem('bearer') != null){
      this.show = true;
    }
  }
}
