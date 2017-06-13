import {Component}from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
<div class="container-fluid">
<h1>WELCOME TO MEAL RECORD.</h1>
  <div class ="ml col-md-6">
    <p>Welcome to Your daily Calorie Counter<p>
    <p>Please input in a list of the meals with their calories to keep a record of them.</p>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
  </div>
  <div class="nm col-md-6">
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
</div>
 `
})
export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Chapo with Tengu.", 200),
    new Meal("Ugali with omena.", 400),
    new Meal("Mchele Marahagwe.", 120),
    new Meal("Chafua Meza.", 306),
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
