import { Component, OnInit } from '@angular/core';
import { GamelistService } from '../../services/gamelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.scss']
})
export class GamedetailComponent implements OnInit
{
  game: any;
  id: any;

  constructor(gameService: GamelistService, private router: Router)
  {
    this.id = Number(localStorage.getItem("id"))
    if(this.id != undefined)
      this.game = gameService.getGameId(this.id)
  }

  ngOnInit(): void {

  }

}
