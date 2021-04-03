import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,  private fb: FormBuilder) { }

  user: User = {
    userId: 0,
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "m",
    userImageUrl: "",
    lastLogin: new Date("05-21-2015"),
    premium: "",
    password: "",
    tagLine: "",
    biography: ""
  }

  editUser = this.fb.group(
    {
      userName :['', Validators.required],
      tagLine :['', Validators.required],
      biography :['', Validators.required],
      userImageUrl :['', Validators.required],
    }
  );

  currentlyEditingUserName = false;
  currentlyEditingTagLine = false;
  currentlyEditingBiography = false;
  currentlyEditingUserImage = false;

  ngOnInit(): void {

    this.authService.getUser(+localStorage.getItem('UserId')!).subscribe(
      (res:any) => {
        this.user = res;

        this.editUser.patchValue({
          userName: this.user.userName,
          tagLine: this.user.tagLine,
          biography: this.user.biography,
          userImageUrl: this.user.userImageUrl
        });
        
      },
      (err:any) => {
        console.log(err);
    });
  }

  editingUserName(isEditing: boolean){
    this.currentlyEditingUserName = isEditing;
    return this.currentlyEditingUserName;
  }

  editingTagLine(isEditing: boolean){
    this.currentlyEditingTagLine = isEditing;
    return this.currentlyEditingTagLine;
  }

  editingBiography(isEditing: boolean){
    this.currentlyEditingBiography = isEditing;
    return this.currentlyEditingBiography;
  }

  editingUserImage(isEditing: boolean){
    this.currentlyEditingUserImage = isEditing;
    return this.currentlyEditingUserImage;
  }


  editUserName(){
    this.editUser.value.tagLine = this.user.tagLine;
    this.editUser.value.biography = this.user.biography;
    this.editUser.value.userImageUrl = this.user.userImageUrl;
    this.authService.editUser(this.editUser).subscribe(
      (res:any) => {
        this.user.userName = this.editUser.value.userName; 
      },
      (err:any) => {
        console.log(err);
    });
    this.editingUserName(false);
  }

  editTagLine(){
    console.log('wtf')
    this.editUser.value.userName = this.user.userName;
    this.editUser.value.biography = this.user.biography;
    this.editUser.value.userImageUrl = this.user.userImageUrl;
    this.authService.editUser(this.editUser).subscribe(
      (res:any) => {
        this.user.tagLine = this.editUser.value.tagLine;
      },
      (err:any) => {
        console.log(err);
    });
    this.editingTagLine(false);
  }

  editBiography(){
    this.editUser.value.userName = this.user.userName;
    this.editUser.value.tagLine = this.user.tagLine;
    this.editUser.value.userImageUrl = this.user.userImageUrl;
    this.authService.editUser(this.editUser).subscribe(
      (res:any) => {
        this.user.biography = this.editUser.value.biography;
      },
      (err:any) => {
        console.log(err);
    });
    this.editingBiography(false);
  }

  editUserImageUrl(){
    this.editUser.value.userName = this.user.userName;
    this.editUser.value.tagLine = this.user.tagLine;
    this.editUser.value.biography = this.user.biography;
    this.authService.editUser(this.editUser).subscribe(
      (res:any) => {
        this.user.userImageUrl = this.editUser.value.userImageUrl; 
      },
      (err:any) => {
        console.log(err);
    });
    this.editingUserImage(false);
  }

}
