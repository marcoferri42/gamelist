import { GameserviceService } from "./gameservice.service"


describe('GameService', () => {
    let gameService : any;

    beforeEach(() => {
        gameService = new GameserviceService();
    })

    it('.initializeGames() should initialize currentGames.', () => {
        expect(gameService.getCurrentGames()).toEqual([])
        gameService.initializeGames();
        const result = gameService.getCurrentGames();
        expect(result.length > 0).toBeTrue();
    })

    it('.getCurrentGames() should return a non-empty GameItem array.', () => {
        gameService.initializeGames();
        const result = gameService.getCurrentGames();
        expect(result.length > 0).toBeTrue();
    })
})