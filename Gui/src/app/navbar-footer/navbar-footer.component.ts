import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { AddContentComponent } from '../add-content/add-content.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar-footer',
  templateUrl: './navbar-footer.component.html',
  styleUrls: ['./navbar-footer.component.scss']
})
export class NavbarFooterComponent implements OnInit {

  userId: number = +localStorage.getItem('UserId')!;
  userName = null;

  constructor(private _bottomSheet: MatBottomSheet, private authService: AuthService) { }

  openBottomSheet(): void {
    this._bottomSheet.open(AddContentComponent);
  }

  ngOnInit(): void {
    this.authService.getUserById(this.userId).subscribe(
      (res:any) => {
        this.userName = res.userName; 
      },
      (err:any) => {
        console.log(err);
    });
  }
}
