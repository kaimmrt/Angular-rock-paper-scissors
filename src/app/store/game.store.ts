import { createStore, withProps } from '@ngneat/elf';
import { defaultGameState, GameState } from '../model/game.model';

export const gameStoreService = createStore(
  { name: 'gameStore' },
  withProps<GameState>(defaultGameState)
);
