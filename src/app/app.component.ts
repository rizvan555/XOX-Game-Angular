import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  box: string = '';
  message: string = '';
  games: string[] = [];

  clickBox(index: number) {
    this.games[index] = this.box;
    if (this.box == 'X') this.box = 'O';
    else this.box = 'X';
    this.message = `Your next step: ${this.box}`;
  }
  newGame() {
    this.box = 'X';
    this.message = 'Next-X';
    this.games = ['', '', '', '', '', '', '', '', ''];
  }
}
