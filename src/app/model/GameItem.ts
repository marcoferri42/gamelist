export class GameItem{
    

    /**
     * Oggetto GameItem
     * @param id 
     * @param nome 
     * @param descrizione 
     * @param genere 
     * @param rating 
     * @param prezzo 
     * @param annoUscita 
     * @param img 
     */
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