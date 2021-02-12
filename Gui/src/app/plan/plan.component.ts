import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Meal } from '../models/meal-model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  meals: Meal[] = [];

  constructor() { 

  }

  ngOnInit(): void {

    this.meals = [
      {id: 1, title: "BBQ Ribs & Baked Potato", content: "Spare Ribs (Pork), Baked Potato, Mac & Cheese.",details: "1000 calories",
      imageCaption: "BBQ Ribs & Baked Potato", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbLaBtYyVOtA6vdfCD9zs0O9yh4aK-fmRtMVdeaCtYjJARrYUwH11YK9Khjg&usqp=CAc"},
      {id: 2, title: "Bacon Cheese Burger & Fries", content: "Apple Smoked Bacon, Quarter Lb of Ground Brisket, Ketchup, Mustard, Lettuce, Onion, Tomato and a side of French Fries",details: "1230 calories",
      imageCaption: "Bacon Cheese Burger & Fries", imageUrl: "https://breadboozebacon.com/wp-content/uploads/2018/05/Buffalo-Blue-Cheese-Burgers-SQUARE.jpg"},
      {id: 3, title: "Ramen / Pho Ga", content: "Chicken thighs, rice noodles, hoisin sauce, thai basil, and some really good broth, maybe swanson?",details: "500 calories",
      imageCaption: "Pho Ga", imageUrl: "https://southernboydishes.com/wp-content/uploads/2014/02/pho-ga-9.jpg"},
      {id: 4, title: "Baked Salmon with Grapefruit Salad", content: "Moist, flaky, melt-in-your-mouth salmon perfection. This is the easy salmon recipe you’ve been waiting for. Oh, and did we mention it cooks in just 15 minutes ",details: "350 calories",
      imageCaption: "Salmon", imageUrl: "https://images.themodernproper.com/billowy-turkey/production/posts/2014/grapefruit-salmon-salad-3.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599770175&s=bce59e692595f65d57117cbff4ed0e65"},
      {id: 5, title: "Sheet Pan Quesadilla with Jalapeño Ranch", content: "Stuffed with cheese and avocado, this giant, melty, upgraded cheese sheet pan quesadilla is good on its own, but we take it over the top with a side of homemade jalapeño ranch for dipping.",details: "620 calories",
      imageCaption: "Quesadilla", imageUrl: "https://images.themodernproper.com/billowy-turkey/production/posts/2020/sheetpan-quesadilla-9.jpg?w=667&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1603458592&s=7fe44b72444b1bbbf1c166f133b0b9f4"},
      {id: 1, title: "BBQ Ribs & Baked Potato", content: "Spare Ribs (Pork), Baked Potato, Mac & Cheese.",details: "1000 calories",
      imageCaption: "BBQ Ribs & Baked Potato", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbLaBtYyVOtA6vdfCD9zs0O9yh4aK-fmRtMVdeaCtYjJARrYUwH11YK9Khjg&usqp=CAc"},
      {id: 2, title: "Bacon Cheese Burger & Fries", content: "Apple Smoked Bacon, Quarter Lb of Ground Brisket, Ketchup, Mustard, Lettuce, Onion, Tomato and a side of French Fries",details: "1230 calories",
      imageCaption: "Bacon Cheese Burger & Fries", imageUrl: "https://breadboozebacon.com/wp-content/uploads/2018/05/Buffalo-Blue-Cheese-Burgers-SQUARE.jpg"},
      {id: 3, title: "Ramen / Pho Ga", content: "Chicken thighs, rice noodles, hoisin sauce, thai basil, and some really good broth, maybe swanson?",details: "500 calories",
      imageCaption: "Pho Ga", imageUrl: "https://southernboydishes.com/wp-content/uploads/2014/02/pho-ga-9.jpg"},
      {id: 4, title: "Baked Salmon with Grapefruit Salad", content: "Moist, flaky, melt-in-your-mouth salmon perfection. This is the easy salmon recipe you’ve been waiting for. Oh, and did we mention it cooks in just 15 minutes ",details: "350 calories",
      imageCaption: "Salmon", imageUrl: "https://images.themodernproper.com/billowy-turkey/production/posts/2014/grapefruit-salmon-salad-3.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599770175&s=bce59e692595f65d57117cbff4ed0e65"},
      {id: 5, title: "Sheet Pan Quesadilla with Jalapeño Ranch", content: "Stuffed with cheese and avocado, this giant, melty, upgraded cheese sheet pan quesadilla is good on its own, but we take it over the top with a side of homemade jalapeño ranch for dipping.",details: "620 calories",
      imageCaption: "Quesadilla", imageUrl: "https://images.themodernproper.com/billowy-turkey/production/posts/2020/sheetpan-quesadilla-9.jpg?w=667&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1603458592&s=7fe44b72444b1bbbf1c166f133b0b9f4"},
    ];
    
  }

}
