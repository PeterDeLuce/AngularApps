//TextScript file that is used by Angular 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Below is a decorator, which is an expression that evaluates to a function
//allowing annotation of classes at the design time

@NgModule({
  //NgModule is a decorator that comes from the angular cose scope package
  //this is a pipe that takes in data through an array

  //Imports, declarations, and bootstrap are all selectors
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
