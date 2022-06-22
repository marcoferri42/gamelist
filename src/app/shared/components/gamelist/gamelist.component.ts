import { Component, Input, OnInit } from '@angular/core';
import { GamelistService } from '../../../services/gamelist.service';
import { Router } from '@angular/router';
import { GameItem } from '../../../GameItem';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})

export class GamelistComponent implements OnInit {

  games: GameItem[];
  constructor(public gameService: GamelistService, private router: Router)
  {
    this.games = gameService.getGames();
  }

  showDetail(selectedGame: GameItem)
  {
    this.router.navigate(['gamelist/gamedetail'])
    this.gameService.selectedGame = selectedGame;
  }

  editGame(selectedGame: GameItem)
  {
    this.router.navigate(['gamelist/editgame'])
    this.gameService.selectedGame = selectedGame;
  }

  ngOnInit(): void {
  }

}
