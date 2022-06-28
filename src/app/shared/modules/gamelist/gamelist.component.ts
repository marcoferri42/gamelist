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

  /**
   * Carica currentgames dal service
   */
  ngOnInit(): void {
    this.games = this.gameService.getCurrentGames();
  }

  /**
   * Salva GameItem selezionato in service
   * Reindirizza al dettaglio
   * @param selectedGame 
   */
  showDetail(selectedGame: GameItem) {
    this.router.navigate(['gamelist/gamedetail'])
    if(selectedGame)
      this.gameService.selectedGame = selectedGame;
  }

  /**
   * Salva GameItem selezionato in service
   * Reindirizza all'editor 
   * @param selectedGame 
   */
  editGame(selectedGame: GameItem) {
    this.router.navigate(['gamelist/editgame'])
    this.gameService.selectedGame = selectedGame;
  }

}
