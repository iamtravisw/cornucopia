import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/plan/plan.service';
import { ImageService } from 'src/app/util/image.service';
import { LoadingService } from 'src/app/util/loading.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

export interface Fruit {
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
      ingredients: this.fb.array([])
    }
  );


  get ingredients() {
    return this.recipeForm.controls["ingredients"] as FormArray;
  }
  
  addNewComponent(){
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









    /*
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage',
      'Tomato', 'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];



      visible = true;
      selectable = true;
      removable = true;
      addOnBlur = true;
      readonly separatorKeysCodes: number[] = [ENTER, COMMA];
      fruits: Fruit[] = [
        {name: 'Lemon'},
        {name: 'Lime'},
        {name: 'Apple'},
      ];

      add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        // Add our fruit
        if ((value || '').trim()) {
          this.fruits.push({name: value.trim()});
        }
    
        // Reset the input value
        if (input) {
          input.value = '';
        }
      }
    
      remove(fruit: Fruit): void {
        const index = this.fruits.indexOf(fruit);
    
        if (index >= 0) {
          this.fruits.splice(index, 1);
        }
      }
      */

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

  onSubmit(){ }

}
