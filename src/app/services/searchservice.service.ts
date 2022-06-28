import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  setSearchFilter ? : String;
  constructor() { }

  //TODO: fare parte del sorting dei giochi in base al nome

  //TODO: capire come impostare questa cosa della lista : 
  //fare display di currentgames e aggiornarlo con una funzione che crea un nuovo array di games qui(?)
  //oppure spostare direttamente i currentgames qui e inizializzarli da qui per poi filtrare la ricerca e il display(?)
}
