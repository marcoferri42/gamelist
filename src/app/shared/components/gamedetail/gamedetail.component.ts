import { Component, OnInit } from '@angular/core';
import { GamelistService } from '../../../services/gamelist.service';
import { Router } from '@angular/router';
import { GameItem } from 'src/app/GameItem';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.scss']
})
export class GamedetailComponent implements OnInit
{
  selectedGame: GameItem | undefined;
  
  constructor(gameService: GamelistService, private router: Router)
  {
    this.selectedGame = gameService.selectedGame;
  }

  ngOnInit(): void {

  }

}
