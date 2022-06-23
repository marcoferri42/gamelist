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

  game : GameItem;

  constructor(private fb: FormBuilder, public gameService: GameserviceService, private router: Router) {
    this.game = gameService.selectedGame!;
  }

  ngOnInit(): void {
    this.form.setValue(this.game)
  }

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



  onSubmit()
  {
    console.log(this.form.getRawValue())
    this.gameService.setGame(this.form.getRawValue())

    this.router.navigate(['gamelist'])
  }





  /*


  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.getRawValue());
  }

  

  back()
  {
    this.router.navigate(['gamelist'])
  }
  */
}