import { ApplicationModule } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { GameserviceService } from "./services/gameservice.service"
import { AppComponent } from "./app.component";
import { GameItem } from "./model/GameItem";
import { RouterTestingModule } from "@angular/router/testing";
import { EditgameComponent } from "./shared/modules/editgame/editgame.component";
import { HomeComponent } from "./pages/home/home.component";

describe('AppComponent', () => { 
  let fixture: any;
  const mockGame = new GameItem(1, "test", "test", "test", "test", "test", new Date(2021, 10, 2), "test");

  beforeEach(() => {
    let service = new GameserviceService;
    let spy = spyOn(service, 'getSelectedGame').and.returnValue(mockGame);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path:   '',           redirectTo: 'home', pathMatch: 'full' },
            { path:   'home',       component:  HomeComponent},
            { path:   'gamelist',   loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) }
          ])
      ],
      providers: [{provide:  GameserviceService, useValue: service }]
    });
  });

  it('should create the app.', () => { 
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    expect(app).toBeTruthy();
  });

  it('should initialize games.', () => {
    fixture = TestBed.createComponent(AppComponent);

    expect(initalizeGames).toHaveBeenCalled();
  });

});