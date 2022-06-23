export class GameItem{
    
    constructor(
        public id: number,
        public nome: string,
        public descrizione: string,
        public genere: string,
        public rating: string,
        public prezzo: string,
        public annoUscita: Date,
        public img: string
    ){
        id;
        nome;
        descrizione;
        genere;
        rating;
        prezzo;
        annoUscita;
        img;
    }
 }