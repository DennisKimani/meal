import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <label>{{ meal.description }}</label>
  </div>
  `
})
export class MealComponent {
  @Input() meal: Meal;
  toggleDone(setCompleteness: boolean) {
    this.meal.done = setCompleteness;
  }
}
