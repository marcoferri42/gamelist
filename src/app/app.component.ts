import { Component } from '@angular/core';
import { GameserviceService } from './services/gameservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gamelist';


  /**
   * Inizializza l'array Games[]
   * @param gameService 
   */
  constructor(public gameService: GameserviceService){
    gameService.initializeGames();
  }
}
