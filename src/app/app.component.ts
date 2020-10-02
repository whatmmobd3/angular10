import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'youtube-ang';
  name = 'burce';

  getName() {
    return this.name;
  }

  obj = {
    name: 'kelly',
    age: 20,
  };

  arr=['david','ddnn2026','american']
}
