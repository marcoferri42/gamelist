import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamelistService } from '../../../services/gamelist.service';
import { GameItem } from '../../../model/GameItem';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})
export class EditgameComponent implements OnInit {

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

  game?: GameItem;

  constructor(private fb: FormBuilder, private gameService: GamelistService, private router: Router) {
    this.game = gameService.selectedGame;
  }

  ngOnInit(): void {
    if(this.game != undefined)
      this.gameForm.setValue(this.game)
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