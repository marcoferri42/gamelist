import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameserviceService } from '../../../services/gameservice.service';
import { GameItem } from '../../../model/GameItem';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss']
})
export class EditgameComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl("", Validators.required),
    nome: new FormControl("", Validators.required),
    descrizione: new FormControl("", Validators.required),
    genere : new FormControl("", Validators.required),
    rating : new FormControl("", Validators.required),
    prezzo : new FormControl("", Validators.required),
    annoUscita : new FormControl("", Validators.required),
    img : new FormControl("", Validators.required),
  });


  game : GameItem;
  constructor(private fb: FormBuilder, public gameService: GameserviceService, private router: Router) {
    this.game = gameService.selectedGame!;
  }

  /**
   * Inserisce nel form dati da GameItem selezionato
   */
  ngOnInit(): void {
    this.form.setValue(this.game)
  }

  /**
   * Salva GameItem da form modificato
   * Reindirizza a /gamelist
   */
  onSubmit(): void{
    this.gameService.setGame(this.form.getRawValue())
    this.router.navigate(['gamelist'])
  }

  /**
   * Reindirizza a /gamelist
   */
  back(): void{
    this.router.navigate(['gamelist'])
  }

}