import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  box: string = '';
  message: string = '';
  games: any[] = [];
  moves: any = [];
  gameOver: boolean = false;
  gameTied: boolean = false;

  newGame() {
    this.box = 'X';
    this.message = 'Next-X';
    this.games = [
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
      { box: '', winner: false },
    ];
    this.gameOver = false;
    this.moves = [];
    this.gameTied = false;
  }

  clickBox(index: number) {
    if (this.games[index].box == '' && !this.gameOver) {
      //Bu "if"-i ona gore yazdiq ki, bir isarenin üstüne 2ci defe basanda calishmasin, yalniz 1 defe calishsin.
      this.games[index].box = this.box;
      this.moves.push([...this.games]); // Bunu asagida cixan "set" yani hamle sayini gostermek ücün yazdiq.
      this.isGameOver();
      this.isGameTied();
      if (this.gameOver) {
        this.message = 'Game Over. Winner is ' + this.box;
      } else if (this.gameTied) {
        this.message = 'Game is Tied';
      } else {
        if (this.box == 'X') this.box = 'O';
        else this.box = 'X';
        this.message = `Your next step: ${this.box}`;
      }
    }
  }

  isGameOver() {
    if (
      this.games[0].box != '' &&
      this.games[0].box === this.games[1].box &&
      this.games[1].box === this.games[2].box
    ) {
      this.gameOver = true;
      this.games[0].winner = true;
      this.games[1].winner = true;
      this.games[2].winner = true;
    }
    if (
      this.games[3].box != '' &&
      this.games[3].box === this.games[4].box &&
      this.games[4].box === this.games[5].box
    ) {
      this.gameOver = true;
      this.games[3].winner = true;
      this.games[4].winner = true;
      this.games[5].winner = true;
    }
    if (
      this.games[6].box != '' &&
      this.games[6].box === this.games[7].box &&
      this.games[7].box === this.games[8].box
    ) {
      this.gameOver = true;
      this.games[6].winner = true;
      this.games[7].winner = true;
      this.games[8].winner = true;
    }
    if (
      this.games[0].box != '' &&
      this.games[0].box === this.games[3].box &&
      this.games[3].box === this.games[6].box
    ) {
      this.gameOver = true;
      this.games[0].winner = true;
      this.games[3].winner = true;
      this.games[6].winner = true;
    }
    if (
      this.games[1].box != '' &&
      this.games[1].box === this.games[4].box &&
      this.games[4].box === this.games[7].box
    ) {
      this.gameOver = true;
      this.games[1].winner = true;
      this.games[4].winner = true;
      this.games[7].winner = true;
    }
    if (
      this.games[2].box != '' &&
      this.games[2].box === this.games[5].box &&
      this.games[5].box === this.games[8].box
    ) {
      this.gameOver = true;
      this.games[2].winner = true;
      this.games[5].winner = true;
      this.games[8].winner = true;
    }
    if (
      this.games[0].box != '' &&
      this.games[0].box === this.games[4].box &&
      this.games[4].box === this.games[8].box
    ) {
      this.gameOver = true;
      this.games[0].winner = true;
      this.games[4].winner = true;
      this.games[8].winner = true;
    }
    if (
      this.games[2].box != '' &&
      this.games[2].box === this.games[4].box &&
      this.games[4].box === this.games[6].box
    ) {
      this.gameOver = true;
      this.games[2].winner = true;
      this.games[4].winner = true;
      this.games[6].winner = true;
    }
  }

  isGameTied() {
    this.gameTied = true;
    for (let index = 0; index < this.games.length; index++) {
      if (this.games[index].box == '') {
        this.gameTied = false;
        break;
      }
    }
  }

  changeWinnerButtonClass(winner: boolean) {
    if (winner) return 'col-md-4 text-center btn btn-success';
    else return 'col-md-4 text-center btn btn-warning';
  }

  setButtonClick(index: number) {
    //Bunu "set" buttonuna basarken o "set"e getsin deye yazdiq
    this.games = this.moves[index];
  }
}
