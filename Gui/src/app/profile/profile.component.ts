import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user-model';
import { LoadingService } from '../util/loading.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ImageService } from '../util/image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,  private fb: FormBuilder, private loadingService: LoadingService, private activatedRoute: ActivatedRoute, private router: Router, private imageService: ImageService) { 
    activatedRoute.params.subscribe(params => {
      this.userName = params['userName'];
    });
  }

  userName = "";
  currentUserId = +localStorage.getItem('UserId')!;
  user: User = {
    userId: 0,
    userName: "",
    displayName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    userImageUrl: "",
    lastLogin: new Date("05-21-2015"),
    premium: "",
    password: "",
    tagLine: "",
    biography: ""
  }

  editUser = this.fb.group(
    {
      displayName :['', Validators.required],
      tagLine :['', Validators.required],
      biography :['', Validators.required]

    }
  );

  currentlyEditingDisplayName = false;
  currentlyEditingTagLine = false;
  currentlyEditingBiography = false;

  @ViewChild('imageInput')
  imageInput!: ElementRef;

  selectedFile: ImageSnippet = new ImageSnippet("", new File([], ""));
  

  ngOnInit(): void {
    this.authService.getUserByUserName(this.userName).subscribe(
      (res:any) => {
        this.loadingService.isLoading = true;
        this.user = res;
        this.editUser.patchValue({
          displayName: this.user.displayName,
          tagLine: this.user.tagLine,
          biography: this.user.biography,
          userImageUrl: this.user.userImageUrl
        })
        this.loadingService.isLoading = false;
      },
      (err:any) => {
        console.log(err);
        this.loadingService.isLoading = false;
    });

    this.router.events.subscribe((event) => {
      if(event) {
        this.loadingService.isLoading = true;
        this.authService.getUserById(this.currentUserId).subscribe(
          (res:any) => {
            this.user = res;
            this.editUser.patchValue({
              displayName: this.user.displayName,
              tagLine: this.user.tagLine,
              biography: this.user.biography,
              userImageUrl: this.user.userImageUrl
            })
          },
          (err:any) => {
            console.log(err);
        });
        this.loadingService.isLoading = false;
      }
    });
  }

  currentUserIsProfileUser(){
    if(this.user.userId === this.currentUserId){
      return true;
    } else {
      return false;
    }
  }

  editingDisplayName(isEditing: boolean){
    this.currentlyEditingDisplayName = isEditing;
    return this.currentlyEditingDisplayName;
  }

  editingTagLine(isEditing: boolean){
    this.currentlyEditingTagLine = isEditing;
    return this.currentlyEditingTagLine;
  }

  editingBiography(isEditing: boolean){
    this.currentlyEditingBiography = isEditing;
    return this.currentlyEditingBiography;
  }

  editDisplayName(){
    this.editUser.value.tagLine = this.user.tagLine;
    this.editUser.value.biography = this.user.biography;
    this.editUser.value.userImageUrl = this.user.userImageUrl;
    this.authService.editUser(this.editUser).subscribe(
      (res:any) => {
        this.user.displayName = this.editUser.value.displayName; 
      },
      (err:any) => {
        console.log(err);
    });
    this.editingDisplayName(false);
  }

  editTagLine(){
    this.editUser.value.displayName = this.user.displayName;
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
    this.editUser.value.displayName = this.user.displayName;
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

  logout(){
    localStorage.clear();
    location.reload();
  }

  processFile(imageInput: any) {
    this.loadingService.isLoading = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res:any) => {
        this.user.userImageUrl = res.userImageUrl;
        this.loadingService.isLoading = false;
        },
        (err:any) => {
        console.log(err);
        this.loadingService.isLoading = false;
        })
        
    });
    reader.readAsDataURL(file);
    this.imageInput.nativeElement.value = "";
  }

}
