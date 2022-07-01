import { Injectable } from '@angular/core';
import { GameItem } from '../model/GameItem';
import { GameserviceService } from './gameservice.service';
@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  constructor(public gameService : GameserviceService) { }

  filterGames(searchFilter: string): GameItem[]{
    const result: GameItem[] = [];
    if(searchFilter != ""){
      this.gameService.getCurrentGames().forEach(i => {
        if(contained(i.nome, searchFilter))

          result.push(i);
      });
      return result;
    }
    else
      return this.gameService.getCurrentGames();
  }
}

/**
 * Seach alg fatto malissimo, .include non funzionava porcc
 * puoi implementare cosa che fa punti in base a lettere matchate
 * mappa punti,id (di gioco) sortabile con bubble3
 * @param nome 
 * @param searchFilter 
 * @returns 
*/
function contained(nome: string, searchFilter: string): Boolean {
  let nomeArray: any[] = nome.toString().split("",nome.length);
  let filterArray: any[] = searchFilter.toString().split("",searchFilter.length);
  let result = false;

  for(let i=0; i<nomeArray.length; i++){
    filterArray.forEach(element => {
      if(element == nomeArray[i])
        result = true;
    });
  }
  return result;
}
