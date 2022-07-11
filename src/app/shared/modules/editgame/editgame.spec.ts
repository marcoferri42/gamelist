import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Form, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { GameserviceService } from "src/app/services/gameservice.service";
import { RouterTestingModule } from '@angular/router/testing';
import { EditgameComponent } from "./editgame.component";
import { GameItem } from "src/app/model/GameItem";
import { EditgameRoutingModule } from "./editgame-routing.module";
import { CommonModule } from "@angular/common";


describe('EditGameComponent', () => {
    let fixture: any;
    const mockGame = new GameItem(1, "test", "test", "test", "test", "test", new Date(2021, 10, 2), "test");

    beforeEach(()=>{
        let service = new GameserviceService;
        let spy = spyOn(service, 'getSelectedGame').and.returnValue(mockGame);

        TestBed.configureTestingModule({
            imports: [
                EditgameRoutingModule,
                CommonModule,      
                ReactiveFormsModule,
                RouterTestingModule.withRoutes(
                    [
                        { path: '', component: EditgameComponent }
                    ])],
            declarations: [ EditgameComponent ],
            providers: [{provide:  GameserviceService, useValue: service }]
        }).compileComponents();

        fixture = TestBed.createComponent(EditgameComponent);
    })

    it('should create.', () => {
        expect(fixture.componentInstance).toBeTruthy();
    })

    it('.ngOnInit() should update game variable.', () => {
        const component = fixture.debugElement.componentInstance;

        spyOn(component.form, 'setValue');
        component.ngOnInit();
        expect(component.game).toBe(mockGame);
    })

    it('.onSubmit() should re-route window.', () => {
        const component = fixture.debugElement.componentInstance;

        spyOn(component.router, 'navigate');
        component.onSubmit();
        expect(component.router.navigate).toHaveBeenCalledWith(['gamelist']);
    });
   
    it('.back() should re-route window.', () =>{
        const component = fixture.debugElement.componentInstance;

        spyOn(component.router, 'navigate');
        component.back();
        expect(component.router.navigate).toHaveBeenCalledWith(['gamelist']);
    })
})