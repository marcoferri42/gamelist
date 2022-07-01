import { ReturnStatement } from '@angular/compiler';
import { noUndefined } from '@angular/compiler/src/util';
import {Injectable, OnInit} from '@angular/core';
import { GameItem } from 'src/app/model/GameItem';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
  private selectedGame?: GameItem;
  private currentGames : GameItem[] = [];
  
  constructor() {}

  setSelectedGame(selectedGame: GameItem) {
    this.selectedGame = selectedGame;
  }

  getSelectedGame(): GameItem | undefined{
    if(this.selectedGame != undefined)
      return this.selectedGame;

    else
      throw new Error('SelectedGame Undefined.');
  }

/**
 * Override di un GameItem di currentGames[] con @param game
 */
  setGame(game: GameItem): void {
    if(this.currentGames != []) {
      for (let i = 0; i < this.currentGames.length; i++) {
        if (this.currentGames[i].id == game.id) {
          this.currentGames[i] = game;
        }
      }
    }
    else
      throw new Error('CurrentGames Empty.');
  }

  /**
   * Semplice get
   * @returns GameItems[]
   */
  getCurrentGames(): GameItem[]{
    if(this.currentGames != [])
      return this.currentGames;
    
    else
      throw new Error('CurrentGames Empty.');
  }

  /**
   * Carica in currentGames[] tutti i GameItem disponibili dal mock getGames().
   * Viene chiamata in app.component.ts
   */
  initializeGames(): void{
    this.currentGames = this.getGames();
  }

  /**
   * Mock database
   * @returns 
   */
  getGames(): GameItem[] {
    return [ 
      { id: 2, nome: 'Street Fighter', descrizione: "Street Fighter è una popolare serie di videogiochi nella quale i personaggi giocabili combattono in giro per il mondo, ognuno con le proprie mosse speciali, l'uno contro l'altro. Il primo gioco della serie è stato pubblicato da Capcom nel 1987", genere: 'Picchiaduro', rating: '7/10', prezzo: '30€', annoUscita: new Date(2021, 10, 2), img: 'https://qdss.it/wp-content/uploads/2020/03/evidenza.jpg', }, 
      { id: 3, nome: 'Super Mario', descrizione: 'Mario, nota anche come Super Mario, è una serie di videogiochi prodotta da Nintendo, considerata una delle più popolari, durature e migliori serie videoludiche della storia. Alcuni titoli appartenenti a questa serie sono considerati tra i più grandi e celebri videogiochi della storia', genere: 'Videogioco a piattaforme', rating: '7/10', prezzo: '35€', annoUscita: new Date(2020, 12, 20), img: 'https://static.posters.cz/image/750/poster/super-mario-characters-i22822.jpg', }, 
      { id: 4, nome: 'Mass Effect', descrizione: 'Mass Effect è una serie di videogiochi action RPG sviluppati da BioWare e pubblicati da Electronic Arts a partire dal 2007 per Xbox 360, Xbox One, Windows, PlayStation 3 e PlayStation 4', genere: 'RPG', rating: '9/10', prezzo: '45€', annoUscita: new Date(2012, 12, 12), img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/2517/xK2b8gY5A5oyYlc1pnUUVEm5.png', }, 
      { id: 5, nome: 'Moto-GP', descrizione: 'Il Motomondiale 2022 è la settantaquattresima edizione del motomondiale.', genere: 'Simulazione', rating: '8/10', prezzo: '55€', annoUscita: new Date(2022, 11, 17), img: 'https://motogpvideogame.com/wp-content/themes/motogp22/dist/images/hero-bg-xs@2x_3fb6046f.jpg', },
      { id: 1, nome: 'Final Fantasy', descrizione: 'Purificazione dei cristalli', genere: 'GDR', rating: '8/10', prezzo: '50€', annoUscita: new Date(2022, 11, 17), img: 'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000257409.jpg', }, 
      { id: 2, nome: 'Street Fighter', descrizione: "Street Fighter è una popolare serie di videogiochi nella quale i personaggi giocabili combattono in giro per il mondo, ognuno con le proprie mosse speciali, l'uno contro l'altro. Il primo gioco della serie è stato pubblicato da Capcom nel 1987", genere: 'Picchiaduro', rating: '7/10', prezzo: '30€', annoUscita: new Date(2021, 10, 2), img: 'https://qdss.it/wp-content/uploads/2020/03/evidenza.jpg', }, 
      { id: 3, nome: 'Super Mario', descrizione: 'Mario, nota anche come Super Mario, è una serie di videogiochi prodotta da Nintendo, considerata una delle più popolari, durature e migliori serie videoludiche della storia. Alcuni titoli appartenenti a questa serie sono considerati tra i più grandi e celebri videogiochi della storia', genere: 'Videogioco a piattaforme', rating: '7/10', prezzo: '35€', annoUscita: new Date(2020, 12, 20), img: 'https://static.posters.cz/image/750/poster/super-mario-characters-i22822.jpg', }, 
      { id: 4, nome: 'Mass Effect', descrizione: 'Mass Effect è una serie di videogiochi action RPG sviluppati da BioWare e pubblicati da Electronic Arts a partire dal 2007 per Xbox 360, Xbox One, Windows, PlayStation 3 e PlayStation 4', genere: 'RPG', rating: '9/10', prezzo: '45€', annoUscita: new Date(2012, 12, 12), img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/2517/xK2b8gY5A5oyYlc1pnUUVEm5.png', }, 
      { id: 5, nome: 'Moto-GP', descrizione: 'Il Motomondiale 2022 è la settantaquattresima edizione del motomondiale.', genere: 'Simulazione', rating: '8/10', prezzo: '55€', annoUscita: new Date(2022, 11, 17), img: 'https://motogpvideogame.com/wp-content/themes/motogp22/dist/images/hero-bg-xs@2x_3fb6046f.jpg', },
      { id: 1, nome: 'Final Fantasy', descrizione: 'Purificazione dei cristalli', genere: 'GDR', rating: '8/10', prezzo: '50€', annoUscita: new Date(2022, 11, 17), img: 'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000257409.jpg', }, 
      { id: 2, nome: 'Street Fighter', descrizione: "Street Fighter è una popolare serie di videogiochi nella quale i personaggi giocabili combattono in giro per il mondo, ognuno con le proprie mosse speciali, l'uno contro l'altro. Il primo gioco della serie è stato pubblicato da Capcom nel 1987", genere: 'Picchiaduro', rating: '7/10', prezzo: '30€', annoUscita: new Date(2021, 10, 2), img: 'https://qdss.it/wp-content/uploads/2020/03/evidenza.jpg', }, 
      { id: 3, nome: 'Super Mario', descrizione: 'Mario, nota anche come Super Mario, è una serie di videogiochi prodotta da Nintendo, considerata una delle più popolari, durature e migliori serie videoludiche della storia. Alcuni titoli appartenenti a questa serie sono considerati tra i più grandi e celebri videogiochi della storia', genere: 'Videogioco a piattaforme', rating: '7/10', prezzo: '35€', annoUscita: new Date(2020, 12, 20), img: 'https://static.posters.cz/image/750/poster/super-mario-characters-i22822.jpg', }, 
      { id: 4, nome: 'Mass Effect', descrizione: 'Mass Effect è una serie di videogiochi action RPG sviluppati da BioWare e pubblicati da Electronic Arts a partire dal 2007 per Xbox 360, Xbox One, Windows, PlayStation 3 e PlayStation 4', genere: 'RPG', rating: '9/10', prezzo: '45€', annoUscita: new Date(2012, 12, 12), img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/2517/xK2b8gY5A5oyYlc1pnUUVEm5.png', }, 
      { id: 5, nome: 'Moto-GP', descrizione: 'Il Motomondiale 2022 è la settantaquattresima edizione del motomondiale.', genere: 'Simulazione', rating: '8/10', prezzo: '55€', annoUscita: new Date(2022, 11, 17), img: 'https://motogpvideogame.com/wp-content/themes/motogp22/dist/images/hero-bg-xs@2x_3fb6046f.jpg', }
    ];
  }
}
