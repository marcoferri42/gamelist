import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameserviceService } from 'src/app/services/gameservice.service';
import { SearchserviceService } from 'src/app/services/searchservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  form = new FormGroup({
    search: new FormControl("", Validators.required)
  });

  constructor(public gameService: GameserviceService, public searchService : SearchserviceService) { }

  onSubmit(): void{
    console.log(this.form.getRawValue());
    console.log(this.searchService.filterGames(this.form.getRawValue()));
  }
}