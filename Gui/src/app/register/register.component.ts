import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerBasic: FormGroup;
  registerUser: FormGroup;
  errorMessage = "";

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { 

    this.registerBasic = this.fb.group({
      firstName :['', Validators.required],
      lastName :['', Validators.required],
      phone :[''],
    })

    this.registerUser = this.fb.group({
      userName :['', Validators.required],
      email :['', Validators.required],
      password :['', Validators.required],
    })
  }

  onSubmit(){
    this.authService.register(this.registerBasic, this.registerUser).subscribe(
      (res:any) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err:any) => {
        console.log(err);
        this.errorMessage = err;
    });
  }

  ngOnInit(): void {

  }

}
