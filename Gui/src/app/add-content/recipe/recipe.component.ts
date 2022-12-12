import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/plan/plan.service';
import { ImageService } from 'src/app/util/image.service';
import { LoadingService } from 'src/app/util/loading.service';
import {COMMA, ENTER, O} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Ingredient } from 'src/app/models/ingredient-model';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private fb: FormBuilder, private planService: PlanService, private loadingService: LoadingService, private imageService: ImageService, private router: Router) { }

  units: any = [];
  cuisines: any = [];
  times: any = [];
  temps: any = [];
  userIngredients: any = [];
  @ViewChild('imageInput')
  imageInput!: ElementRef;
  currentImage: any;
  selectedFile: ImageSnippet = new ImageSnippet("", new File([], ""));
  numOfIngredients: number = 0;
  recipeIngredients: Ingredient[] = [];

  ingredientForm = this.fb.group({
    ingredientName0: new FormControl('', [Validators.required]),
    ingredientName1: new FormControl('', [Validators.required]),
    ingredientName2: new FormControl('', [Validators.required]),
    ingredientName3: new FormControl('', [Validators.required]),
    ingredientName4: new FormControl('', [Validators.required]),
    ingredientName5: new FormControl('', [Validators.required]),
    ingredientName6: new FormControl('', [Validators.required]),
    ingredientName7: new FormControl('', [Validators.required]),
    ingredientName8: new FormControl('', [Validators.required]),
    ingredientName9: new FormControl('', [Validators.required]),
    ingredientUnit0: new FormControl('', [Validators.required]),
    ingredientUnit1: new FormControl('', [Validators.required]),
    ingredientUnit2: new FormControl('', [Validators.required]),
    ingredientUnit3: new FormControl('', [Validators.required]),
    ingredientUnit4: new FormControl('', [Validators.required]),
    ingredientUnit5: new FormControl('', [Validators.required]),
    ingredientUnit6: new FormControl('', [Validators.required]),
    ingredientUnit7: new FormControl('', [Validators.required]),
    ingredientUnit8: new FormControl('', [Validators.required]),
    ingredientUnit9: new FormControl('', [Validators.required]),
    ingredientQty0: new FormControl('', [Validators.required]),
    ingredientQty1: new FormControl('', [Validators.required]),
    ingredientQty2: new FormControl('', [Validators.required]),
    ingredientQty3: new FormControl('', [Validators.required]),
    ingredientQty4: new FormControl('', [Validators.required]),
    ingredientQty5: new FormControl('', [Validators.required]),
    ingredientQty6: new FormControl('', [Validators.required]),
    ingredientQty7: new FormControl('', [Validators.required]),
    ingredientQty8: new FormControl('', [Validators.required]),
    ingredientQty9: new FormControl('', [Validators.required]),
  });



  recipeForm = this.fb.group(
    {
      name :['', Validators.required],
      imageUrl :[''],
      cuisine :[''],
      prepTime :[''],
      prepTimeUnits :[''],
      cookTime :[''],
      cookTimeUnits :[''],
      temp :[''],
      tempUnits :[''],
      yield :[''],
      ingredients: this.fb.array([]),
      instructions :[''],
      equipment :[''],
      notes :[''],
      tags: [''],
    }
  );


  get ingredients() {
    return this.recipeForm.controls["ingredients"] as FormArray;
  }
  
  addNewIngredient(){
    this.numOfIngredients++;
    this.ingredients.push(this.ingredientForm);
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

  panelOpenState = true;

      selectable = true;
      removable = true;
      addOnBlur = true;
      readonly separatorKeysCodes: number[] = [ENTER, COMMA];

      tags: any = [{name: "recipe"}];

      add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        // Add our tag
        if ((value || '').trim()) {
          this.tags.push({name: value.trim()});
        }
    
        // Reset the input value
        if (input) {
          input.value = '';
        }
        
      }
    
      remove(tag: Tag): void {
        const index = this.tags.indexOf(tag);
    
        if (index >= 0) {
          this.tags.splice(index, 1);
        }
      }
      

  ngOnInit(): void {
    this.planService.getCuisines().subscribe(
      (res:any) => {
        this.cuisines = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
    this.planService.getTimes().subscribe(
      (res:any) => {
        this.times = res;
      },
      (err:any) => {
        console.log(err);
      }
    );

    this.planService.getTemps().subscribe(
      (res:any) => {
        this.temps = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
    this.getIngredientsAndUnits();
  }

  getIngredientsAndUnits() {
    this.planService.getUnits().subscribe(
      (res:any) => {
        this.units = res;
      },
      (err:any) => {
        console.log(err);
      }
    );

    this.planService.getAllIngredientsForUser().subscribe(
      (res:any) => {
        this.userIngredients = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  

  onSubmit(){ 
    this.loadingService.isLoading = true;

    const ingredient0: Ingredient = {};
    const ingredient1: Ingredient = {};
    const ingredient2: Ingredient = {};
    const ingredient3: Ingredient = {};
    const ingredient4: Ingredient = {};
    const ingredient5: Ingredient = {};
    const ingredient6: Ingredient = {};
    const ingredient7: Ingredient = {};
    const ingredient8: Ingredient = {};
    const ingredient9: Ingredient = {};

    if(this.ingredientForm.controls.ingredientName0.value.ingredientName){
      ingredient0.ingredientName = this.ingredientForm.controls.ingredientName0.value.ingredientId;  
      ingredient0.ingredientName = this.ingredientForm.controls.ingredientName0.value.ingredientName;  
      ingredient0.unitMeasurement = this.ingredientForm.controls.ingredientUnit0.value;
      ingredient0.quantity = this.ingredientForm.controls.ingredientQty0.value;
      this.recipeIngredients.push(ingredient0);
    }
    
    if(this.ingredientForm.controls.ingredientName1.value.ingredientName){
      ingredient1.ingredientName = this.ingredientForm.controls.ingredientName1.value.ingredientId;  
      ingredient1.ingredientName = this.ingredientForm.controls.ingredientName1.value.ingredientName;  
      ingredient1.unitMeasurement = this.ingredientForm.controls.ingredientUnit1.value;
      ingredient1.quantity = this.ingredientForm.controls.ingredientQty1.value;
      this.recipeIngredients.push(ingredient1);
    }

    if(this.ingredientForm.controls.ingredientName2.value.ingredientName){
      ingredient2.ingredientName = this.ingredientForm.controls.ingredientName2.value.ingredientId;  
      ingredient2.ingredientName = this.ingredientForm.controls.ingredientName2.value.ingredientName;  
      ingredient2.unitMeasurement = this.ingredientForm.controls.ingredientUnit2.value;
      ingredient2.quantity = this.ingredientForm.controls.ingredientQty2.value;
      this.recipeIngredients.push(ingredient2);
    }

    if(this.ingredientForm.controls.ingredientName3.value.ingredientName){
      ingredient3.ingredientName = this.ingredientForm.controls.ingredientName3.value.ingredientId;  
      ingredient3.ingredientName = this.ingredientForm.controls.ingredientName3.value.ingredientName;  
      ingredient3.unitMeasurement = this.ingredientForm.controls.ingredientUnit3.value;
      ingredient3.quantity = this.ingredientForm.controls.ingredientQty3.value;
      this.recipeIngredients.push(ingredient3);
    }

    if(this.ingredientForm.controls.ingredientName4.value.ingredientName){
      ingredient4.ingredientName = this.ingredientForm.controls.ingredientName4.value.ingredientId;  
      ingredient4.ingredientName = this.ingredientForm.controls.ingredientName4.value.ingredientName;  
      ingredient4.unitMeasurement = this.ingredientForm.controls.ingredientUnit4.value;
      ingredient4.quantity = this.ingredientForm.controls.ingredientQty4.value;
      this.recipeIngredients.push(ingredient4);
    }

    if(this.ingredientForm.controls.ingredientName5.value.ingredientName){
      ingredient5.ingredientName = this.ingredientForm.controls.ingredientName5.value.ingredientId;  
      ingredient5.ingredientName = this.ingredientForm.controls.ingredientName5.value.ingredientName;  
      ingredient5.unitMeasurement = this.ingredientForm.controls.ingredientUnit5.value;
      ingredient5.quantity = this.ingredientForm.controls.ingredientQty5.value;
      this.recipeIngredients.push(ingredient5);
    }

    if(this.ingredientForm.controls.ingredientName6.value.ingredientName){
      ingredient6.ingredientName = this.ingredientForm.controls.ingredientName6.value.ingredientId;  
      ingredient6.ingredientName = this.ingredientForm.controls.ingredientName6.value.ingredientName;  
      ingredient6.unitMeasurement = this.ingredientForm.controls.ingredientUnit6.value;
      ingredient6.quantity = this.ingredientForm.controls.ingredientQty6.value;
      this.recipeIngredients.push(ingredient6);
    }

    if(this.ingredientForm.controls.ingredientName7.value.ingredientName){
      ingredient7.ingredientName = this.ingredientForm.controls.ingredientName7.value.ingredientId;  
      ingredient7.ingredientName = this.ingredientForm.controls.ingredientName7.value.ingredientName;  
      ingredient7.unitMeasurement = this.ingredientForm.controls.ingredientUnit7.value;
      ingredient7.quantity = this.ingredientForm.controls.ingredientQty7.value;
      this.recipeIngredients.push(ingredient7);
    }

    if(this.ingredientForm.controls.ingredientName8.value.ingredientName){
      ingredient8.ingredientName = this.ingredientForm.controls.ingredientName8.value.ingredientId;  
      ingredient8.ingredientName = this.ingredientForm.controls.ingredientName8.value.ingredientName;  
      ingredient8.unitMeasurement = this.ingredientForm.controls.ingredientUnit8.value;
      ingredient8.quantity = this.ingredientForm.controls.ingredientQty8.value;
      this.recipeIngredients.push(ingredient8);
    }

    if(this.ingredientForm.controls.ingredientName9.value.ingredientName){
      ingredient9.ingredientName = this.ingredientForm.controls.ingredientName9.value.ingredientId;  
      ingredient9.ingredientName = this.ingredientForm.controls.ingredientName9.value.ingredientName;  
      ingredient9.unitMeasurement = this.ingredientForm.controls.ingredientUnit9.value;
      ingredient9.quantity = this.ingredientForm.controls.ingredientQty9.value;
      this.recipeIngredients.push(ingredient9);
    }

    this.imageService.uploadRecipeImage(this.selectedFile.file).subscribe(
      (res:any) => {
        this.currentImage = res.imageUrl;
        this.planService.addRecipe(this.recipeForm, this.recipeIngredients, this.currentImage, this.tags).subscribe(
          (res:any) => {
            this.recipeForm.reset();
            this.router.navigate(["/plan"]).then(()=>{
              this.planService.setTabIndex(2);
            });
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

}
