import { Component } from '@angular/core';


// Decorator -> configuration setup for components

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app-firist';
}
