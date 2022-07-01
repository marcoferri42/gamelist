import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../../../services/gameservice.service';
import { Router } from '@angular/router';
import { GameItem } from '../../../model/GameItem';
import { SearchComponent } from '../search/search.component';
import { SearchserviceService } from 'src/app/services/searchservice.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})

export class GamelistComponent implements OnInit {

  games?: GameItem[];
  constructor(public gameService: GameserviceService, public searchService: SearchserviceService, private router: Router) { }

  /**
   * Carica currentgames dal service
   */
  ngOnInit(): void {
    this.games = this.searchService.filterGames("");
  }

  /**
   * Salva GameItem selezionato in service
   * Reindirizza al dettaglio
   * @param selectedGame 
   */
  showDetail(selectedGame: GameItem) {
    this.router.navigate(['gamelist/gamedetail'])
    if(selectedGame)
      this.gameService.setSelectedGame(selectedGame);
  }

  /**
   * Salva GameItem selezionato in service
   * Reindirizza all'editor 
   * @param selectedGame 
   */
  editGame(selectedGame: GameItem) {
    this.router.navigate(['gamelist/editgame'])
    this.gameService.setSelectedGame(selectedGame);
  }

}
