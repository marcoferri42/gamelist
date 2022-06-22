import { Component, Input, OnInit } from '@angular/core';
import { GamelistService } from '../../services/gamelist.service';
import { Router } from '@angular/router';
import { GameItem } from '../../GameItem';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})

export class GamelistComponent implements OnInit {

  games: GameItem[];
  @Input() modifyMode: any;

  constructor(gameService: GamelistService, private router: Router)
  {
    this.games = gameService.gamesArray;
  }

  showDetail(id: number)
  {
    this.router.navigate(['gamelist/gamedetail'])

    //Qui verra implementato la call al database
    localStorage.setItem("id",String(id));
  }

  editMode(id: number)
  {
    this.router.navigate(['gamelist/modify'])

    //Qui verra implementato la call al database
    localStorage.setItem("id",String(id));
  }

  ngOnInit(): void {
  }

}
