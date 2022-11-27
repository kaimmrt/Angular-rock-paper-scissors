import { Injectable } from '@angular/core';
import { deepFreeze, select } from '@ngneat/elf';
import { Observable } from 'rxjs';
import { defaultGameState, GameState, Item } from '../model/game.model';
import { gameStoreService } from './game.store';

@Injectable({
  providedIn: 'root',
})
export class GameStoreService {
  // GETTERS
  isLoading(): Observable<boolean> {
    return gameStoreService.pipe(select((state: GameState) => state.loading));
  }

  getStates(): Observable<GameState> {
    return gameStoreService.pipe(
      select((state) =>
        deepFreeze({
          items: state.items,
          selectedItem: state.selectedItem,
          computerSelectedItem: state.computerSelectedItem,
          score: state.score,
          message: state.message,
          click: state.click,
        })
      )
    );
  }

  // ACTIONS
  updateSelectedItem(selectedItem: Item): void {
    const id = Math.floor(Math.random() * 3) + 1;
    const computerSelectedItem = defaultGameState.items.find(
      (value) => value.id === id
    );

    gameStoreService.update((state: GameState) => {
      let score = state.score;
      let message = '';
      if (selectedItem.title === computerSelectedItem?.title) {
        score += 0;
        message = 'DRAW';
      }
      if (selectedItem.title === 'paper') {
        if (computerSelectedItem?.title === 'scissors') {
          score -= 1;
          message = 'YOU LOSE';
        }
        if (computerSelectedItem?.title === 'rock') {
          score += 1;
          message = 'YOU WIN';
        }
      }
      if (selectedItem.title === 'scissors') {
        if (computerSelectedItem?.title === 'paper') {
          score += 1;
          message = 'YOU WIN';
        }
        if (computerSelectedItem?.title === 'rock') {
          score -= 1;
          message = 'YOU LOSE';
        }
      }
      if (selectedItem.title === 'rock') {
        if (computerSelectedItem?.title === 'paper') {
          score -= 1;
          message = 'YOU LOSE';
        }
        if (computerSelectedItem?.title === 'scissors') {
          score += 1;
          message = 'YOU WIN';
        }
      }
      return {
        ...state,
        click: true,
        selectedItem: selectedItem,
        computerSelectedItem: computerSelectedItem!,
        score,
        message,
      };
    });
  }

  playAgain(): void {
    gameStoreService.update((state: GameState) => {
      return {
        ...state,
        click: false,
      };
    });
  }
}
