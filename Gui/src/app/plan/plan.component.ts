import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Meal } from '../models/meal-model';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  
  meals: Meal[] = [];
  foods: Meal[] = [];
  recipes: Meal[] = [];
  ingredients: any;
  displayedColumns: any;
  userId = +localStorage.getItem('UserId')!;

  constructor(private planService: PlanService, private router: Router) {}

  @ViewChild("tabGroup", { static: false }) tabGroup!: MatTabGroup;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ingredients.filter = filterValue.trim().toLowerCase();
  }

  switchTabs(tabIndex: number) {
    const tabGroup = this.tabGroup;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    const tabCount = tabGroup._tabs.length;
    tabGroup.selectedIndex = (tabGroup.selectedIndex! + tabIndex) % tabCount;
  }
  
  ngOnInit(): void {

    this.planService.getAllIngredientsForUser(this.userId).subscribe(
      (res:any) => {
        this.ingredients = new MatTableDataSource(res);
      },
      (err:any) => {
        console.log(err);
      }
    );
    
    this.displayedColumns = ['imageUrl', 'ingredientName', "quantity"];
  }

  editRow(row: any){
    this.planService.setRowToEdit(row);
    this.router.navigate(['/edit/ingredient']);
  }

  ngAfterViewInit(){
    this.switchTabs(this.planService.tabIndex);
    this.planService.setTabIndex(0);
  }
}
