import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { GameItem } from "src/app/model/GameItem";
import { GameserviceService } from "src/app/services/gameservice.service";
import { GamedetailComponent } from "./gamedetail.component";


describe('GamedetailComponent', () => {
    let fixture: any;
    const mockGame = new GameItem(1, "test", "test", "test", "test", "test", new Date(2021, 10, 2), "test");

    beforeEach(() =>{
        let service = new GameserviceService;
        let spy = spyOn(service, 'getSelectedGame').and.returnValue(mockGame);

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(
                    [{ path: '', component: GamedetailComponent }])
            ],
            declarations: [GamedetailComponent],
            providers: [{provide:  GameserviceService, useValue: service }]
        }).compileComponents();

        fixture = TestBed.createComponent(GamedetailComponent);
    })
    
    it('should create.', () => {
        expect(fixture.componentInstance).toBeTruthy();
    })

});