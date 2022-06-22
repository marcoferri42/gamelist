import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamelistService } from '../../services/gamelist.service';
import { GameItem } from '../../GameItem';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})
export class EditgameComponent implements OnInit {

  gameId: number = 0;

  public gameForm = this.fb.group({

    id: ['', Validators.required],
    nome: ['', Validators.required],
    descrizione: ['', Validators.required],
    genere : ['', Validators.required],
    rating : ['', Validators.required],
    prezzo : ['', Validators.required],
    annoUscita : ['', Validators.required],
    img : ['', Validators.required]
  });

  game: GameItem = this.gameForm.value;

  constructor(private fb: FormBuilder, private gameService: GamelistService, private router: Router) { }

  ngOnInit(): void {
    this.gameId = Number(localStorage.getItem("id"))

    this.game = this.gameService.getGameId(this.gameId)
    this.gameForm.setValue(this.game)
    console.log(this.game)
  }

  modify(game : GameItem)
  {
    this.gameService.modify(game)
    this.router.navigate(['gamelist'])
  }

  back()
  {
    this.router.navigate(['gamelist'])
  }

}
