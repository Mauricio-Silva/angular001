import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular001';
  curricularUnit = 'DBF-II';
  a = 10;
  b = 20;

  printTitle(): string {
    return this.title;
  }
}
