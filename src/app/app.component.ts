import { Component } from '@angular/core';
import { ItemsComponent } from './components/items/items.component';
import { ScorboardComponent } from './components/scorboard/scorboard.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AppComponent, ItemsComponent, ScorboardComponent],
})
export class AppComponent {
  title = 'rock-paper-scissors';
}
