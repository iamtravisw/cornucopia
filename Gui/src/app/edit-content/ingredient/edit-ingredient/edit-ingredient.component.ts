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
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.scss']
})
export class EditIngredientComponent implements OnInit {

  constructor(private fb: FormBuilder, private planService: PlanService, private loadingService: LoadingService, private imageService: ImageService, private router: Router) { }

  @ViewChild('imageInput')
  imageInput!: ElementRef;
  ingredient!: Ingredient;
  selectedFile: ImageSnippet = new ImageSnippet("", new File([], ""));
  units: any = [];
  currentImage: any;

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
    this.ingredient = this.planService.rowToEdit;
    this.ingredientForm.patchValue({
      ingredientName: this.ingredient.ingredientName,
      imageUrl: this.ingredient.imageUrl,
      unit: this.ingredient.unit,
      quantity: this.ingredient.quantity,
      warningLow: this.ingredient.warningLow,
      note: this.ingredient.note
    });
    this.currentImage = this.ingredient.imageUrl;
  }

  ngAfterViewInit(){
    if(!this.ingredient){
      this.ingredientForm.reset();

      this.router.navigate(["/plan"]).then(()=>{
        this.planService.setTabIndex(3);
      });
    }
  }

  onSubmit(){
    this.loadingService.isLoading = true;
    this.imageService.uploadIngredientImage(this.selectedFile.file).subscribe(
      (res:any) => {
        this.currentImage = res.imageUrl;
        this.planService.editIngredient(this.ingredientForm, this.currentImage, this.ingredient.ingredientId!).subscribe(
          (res:any) => {
            this.ingredientForm.reset();
            this.router.navigate(["/plan"]).then(()=>{
              this.planService.setTabIndex(3);
            });
          },
          (err:any) => {
            console.log(err);
          }
        );
        this.loadingService.isLoading = false;
      },
      (err:any) => {
        console.log(err);
        this.loadingService.isLoading = false;
    });
  }

  deleteIngredient(){
    this.loadingService.isLoading = true;
    this.planService.deleteIngredient(this.ingredient.ingredientId!).subscribe(
      (res:any) => {
        this.loadingService.isLoading = false;
        this.ingredientForm.reset();
        this.router.navigate(["/plan"]).then(()=>{
          this.planService.setTabIndex(3);
        });
      },
      (err:any) => {
        console.log(err);
        this.loadingService.isLoading = false;
      }   
    );
  }

  goBack(){
    this.ingredientForm.reset();
    this.router.navigate(["/plan"]).then(()=>{
      this.planService.setTabIndex(3);
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
