import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">

<!--MealList
[childMealList]="masterMealList"
(clickSender)="showDetails($event)"
></meal-list-->

    <h1>Edit to Enter the meal which you ate Today!!</h1>
    <new-form>
    (newFoodSender)="addFood($event)"
    </new-form>
    <div *ngFor="let currentFood of foods">
      <h3>{{ currentFood.description }}</h3>
      <button (click)="showDetails(currentFood)">Edit</button>
    </div>
    <div *ngIf="selectedFood">
    <h1>Edit Food</h1>
    <div>
      <label>Enter Food Description:</label>
      <input [(ngModel)]="selectedFood.description">
    </div>
    <div>
      <label>Enter meal calories:</label>
      <input [(ngModel)]="selectedFood.calories">
      <button (click)="finishedEditing()">Done</button>
    </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("I ate french fries.", 200),
    new Food("I ate ugali with meat.", 160),
    new Food("I ate rice with beans.", 66),
    new Food("I ate chapo tengu.", 80)
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
}

export class Food {
  public done: boolean = false;
  constructor(public description: string, public calories: number) { }
}
