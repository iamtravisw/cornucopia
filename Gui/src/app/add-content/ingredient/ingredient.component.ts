import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlanService } from 'src/app/plan/plan.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private fb: FormBuilder, private planService: PlanService) { }

  units: any = [];

  ingredientForm = this.fb.group(
    {
      ingredientName :['', Validators.required],
      imageUrl :[''],
      unit :[''],
      quantity :[''],
      warningLow :[''],
      note :['']
    }
  );

  onSubmit(){
    console.log("submitted")

    this.planService.addIngredient(this.ingredientForm).subscribe(
      (res:any) => {
        console.log(res);
      },
      (err:any) => {
        console.log(err);
        }
      );
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
