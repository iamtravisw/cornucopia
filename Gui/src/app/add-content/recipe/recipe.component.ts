import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
  @ViewChild('imageInput')
  imageInput!: ElementRef;
  currentImage: any;
  selectedFile: ImageSnippet = new ImageSnippet("", new File([], ""));

  panelOpenState = true;

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

}
