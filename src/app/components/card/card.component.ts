import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from 'src/app/model/game.model';
import { GameStoreService } from 'src/app/store/game.repository';

@Component({
  standalone: true,
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
  imports: [CommonModule],
})
export class CardComponent {
  @Input() public item: Item;

  constructor(private gameStoreService: GameStoreService) {}

  public updateSelectedItem(item: Item) {
    this.gameStoreService.updateSelectedItem(item);
  }
}
