import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../../../services/gameservice.service';
import { Router } from '@angular/router';
import { GameItem } from '../../../model/GameItem';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})

export class GamelistComponent implements OnInit {

  games?: GameItem[];
  
  constructor(public gameService: GameserviceService, private router: Router) { }

  ngOnInit(): void {
    this.games = this.gameService.getCurrentGames();
  }

  showDetail(selectedGame: GameItem) {
    this.router.navigate(['gamelist/gamedetail'])
    if(selectedGame)
      this.gameService.selectedGame = selectedGame;
  }

  editGame(selectedGame: GameItem) {
    this.router.navigate(['gamelist/editgame'])
    this.gameService.selectedGame = selectedGame;
  }

}
