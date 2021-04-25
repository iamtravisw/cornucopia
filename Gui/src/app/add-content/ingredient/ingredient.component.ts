import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient-model';
import { PlanService } from 'src/app/plan/plan.service';
import { ImageService } from 'src/app/util/image.service';
import { LoadingService } from 'src/app/util/loading.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private fb: FormBuilder, private planService: PlanService, private loadingService: LoadingService, private imageService: ImageService, private router: Router) { }

  units: any = [];

  @ViewChild('imageInput')
  imageInput!: ElementRef;
  currentImage: any;

  selectedFile: ImageSnippet = new ImageSnippet("", new File([], ""));

  ingredientForm = this.fb.group(
    {
      ingredientName :['', Validators.required],
      imageUrl :[''],
      unit :['None', Validators.required],
      quantity :[''],
      warningLow :[''],
      note :['']
    }
  );

  ngOnInit(): void {
    this.planService.getUnits().subscribe(
      (res:any) => {
        this.units = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  onSubmit(){
    this.loadingService.isLoading = true;
    this.imageService.uploadIngredientImage(this.selectedFile.file).subscribe(
      (res:any) => {
        this.currentImage = res.imageUrl;
        this.planService.addIngredient(this.ingredientForm, this.currentImage).subscribe(
          (res:any) => {
            this.planService.setTabIndex(3);
            this.router.navigate(['/plan']);
            this.ingredientForm.reset();
          },
          (err:any) => {
            console.log(err);
          });
        this.loadingService.isLoading = false;
      },
      (err:any) => {
        console.log(err);
        this.loadingService.isLoading = false;
    });
  }
  
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.currentImage = this.selectedFile.src;
    });
    reader.readAsDataURL(file);
    this.imageInput.nativeElement.value = "";
  }
}
