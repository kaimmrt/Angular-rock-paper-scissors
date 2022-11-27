export interface Item {
  id: number;
  title: string;
  color: string;
}

export interface GameState {
  loading: boolean;
  items: Item[];
  selectedItem: Item | null;
  computerSelectedItem: Item | null;
  score: number;
  message: string;
  click: boolean;
}

export const defaultGameState: GameState = {
  loading: true,
  items: [
    { id: 1, title: 'rock', color: '#DD364F' },
    { id: 2, title: 'paper', color: '#4865f4' },
    { id: 3, title: 'scissors', color: '#EC9E3D' },
  ],
  selectedItem: null,
  computerSelectedItem: null,
  score: 0,
  message: '',
  click: false,
};
