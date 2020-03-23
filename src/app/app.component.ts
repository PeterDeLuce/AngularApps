import { Component } from '@angular/core';
//component is a decorator
@Component({
  //This is the argument of the decorator

  //The mw-app string is a custom DOM element that connects to the 
  //index.html page and uses the templateUrl to insert the html 
  //from ./app.component.html which is "Hello Angular"

  //I used mw becuase the linkedin lesson used it, it can be anything though
  selector: 'mw-app',
  templateUrl: './app.component.html',
  //styles use a string
  //./app.component.css is the style sheet for the "Hello Angular"
  styleUrls: ['./app.component.css']
})

//exports a class for the Component
export class AppComponent {
}