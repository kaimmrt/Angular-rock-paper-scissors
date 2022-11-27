import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameState } from 'src/app/model/game.model';
import { GameStoreService } from 'src/app/store/game.repository';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-items',
  styleUrls: ['./items.component.scss'],
  templateUrl: './items.component.html',
  imports: [CommonModule, CardComponent],
})
export class ItemsComponent implements OnInit {
  state$: Observable<GameState>;

  constructor(private gameStoreService: GameStoreService) {}

  ngOnInit(): void {
    this.state$ = this.gameStoreService.getStates();
  }

  playAgain() {
    this.gameStoreService.playAgain();
  }
}
