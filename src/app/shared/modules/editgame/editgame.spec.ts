import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Form, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { GameserviceService } from "src/app/services/gameservice.service";
import { RouterTestingModule } from '@angular/router/testing';
import { EditgameComponent } from "./editgame.component";
import { GameItem } from "src/app/model/GameItem";
import { EditgameRoutingModule } from "./editgame-routing.module";
import { CommonModule } from "@angular/common";


describe('EditGameComponent', () => {
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [
                EditgameRoutingModule,
                CommonModule,      
                ReactiveFormsModule,
                RouterTestingModule],
            declarations: [ EditgameComponent ]
        }).compileComponents();
    })

    it('.onSubmit() should re-route window.', () => {
        const fixture = TestBed.createComponent(EditgameComponent);
        const component = fixture.debugElement.componentInstance;
        const service = fixture.debugElement.injector.get(GameserviceService);

        service.setSelectedGame(new GameItem(1, "test", "test", "test", "test", "test", new Date(2020, 12, 20), "test"))
        
        component.onSubmit();
        expect(window.location.pathname == 'gamelist').toBeTrue()
    })
   
})