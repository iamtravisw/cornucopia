import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  userName: string = "Admin";
  tagLine: string = "Write a tagline"
  biography: string = "Nothing here yet..."
  joinDate: Date = new Date("11-13-2021")

  ngOnInit(): void {
  }

}
