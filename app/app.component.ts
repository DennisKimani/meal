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
  <div class ="ml col-md-6">
    <h4>Please input in a list of the meals with their calories to keep a record of them.</h4>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
    <br>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
  </div>
  <div class="pad">
  <div class="nm col-md-6">
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
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
