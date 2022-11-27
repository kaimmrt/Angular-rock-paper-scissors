import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameState, Item } from 'src/app/model/game.model';
import { GameStoreService } from 'src/app/store/game.repository';

@Component({
  standalone: true,
  selector: 'app-scorboard',
  styleUrls: ['./scorboard.component.scss'],
  templateUrl: './scorboard.component.html',
  imports: [CommonModule],
})
export class ScorboardComponent implements OnInit {
  state$: Observable<GameState>;

  constructor(private gameStoreService: GameStoreService) {}

  ngOnInit(): void {
    this.state$ = this.gameStoreService.getStates();
  }
}
