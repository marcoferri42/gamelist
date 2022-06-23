import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../../../services/gameservice.service';
import { Router } from '@angular/router';
import { GameItem } from 'src/app/model/GameItem';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.scss']
})
export class GamedetailComponent implements OnInit
{
  selectedGame: GameItem | undefined;
  
  constructor(gameService: GameserviceService, private router: Router)
  {
    this.selectedGame = gameService.selectedGame;
  }

  ngOnInit(): void {

  }

}