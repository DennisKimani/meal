import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent }   from './meal-list.component';
import { NewFoodComponent }   from './meal-form.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    NewFoodComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
