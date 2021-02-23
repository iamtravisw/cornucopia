import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  errorMessage = "";
  loginForm = this.fb.group(
    {
      userName :['', Validators.required],
      password :['', Validators.required],
    }
  );
  
  onSubmit(){
    this.authService.login(this.loginForm).subscribe(
      (res:any) => {
        console.log(res);
        localStorage.setItem('Bearer', res.Bearer);
        localStorage.setItem('UserId', res.User.userId);
        this.router.navigate(['/profile']);
      },
      (err:any) => {
        console.log(err);
        this.errorMessage = "Check your username and password."
      }
    );
  }
  

  ngOnInit(): void {
  }

}
