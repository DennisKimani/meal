import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show Meals with 500 calories and above</option>
      <option value="isDone">Show Meals with less than 500 calories</option>
      <option value="all2">Show All</option>
    </select>
    <div *ngFor="let currentMeal of childMealList | complete:selectedComplete">
      <meal-display [meal]="currentMeal"></meal-display>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(MealToEdit: Meal) {
    this.clickSender.emit(MealToEdit);
  }
}
