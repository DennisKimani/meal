import {Component}from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
<div class="container-fluid">
<div class="main">
<h1>WELCOME TO MEAL RECORD.</h1>
<h3>Welcome to the daily meal-list, please keep a record.</h3>
</div>
  <div class ="ml col-md-12">
    <h4>Please input in a list of meals with their calories to keep a record of them.</h4>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
    <br>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
    <br>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
  </div>
 `
})
export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Chapo with Tengu.", 600),
    new Meal("Ugali with omena.", 560),
    new Meal("Mchele Marahagwe.", 220),
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
