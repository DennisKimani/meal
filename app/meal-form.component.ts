import {Component, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-form',
  template: `
    <h3>Fill in your data</h3>
    <div>
    <label>Your Name:</label>
    <input #newName>
    </div>
    <div>
    <label>Enter Meal:</label>
    <input #newMeal>
    </div>
    <div>
    <label>Description</label>
    <input #newDescription>
    </div>
    <div>
    <label>Calories</label>
    <input #newCalories>
    </div>
    <button (click)="addClicked(newName.value, newMeal.value, newDescription.value, newCalories.value)">Add</button>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, meal: string, description: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, meal, description, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
