import { ApplicationModule } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { GameserviceService } from "./services/gameservice.service"
import { AppComponent } from "./app.component";

describe('AppComponent', () => { 
  let spy: any;
  let service: GameserviceService;
  let component: AppComponent;
   
  it('should create the app', () => { 
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   *  beforeEach(() => { 
        service = new GameserviceService;
        component = new AppComponent(service);
      });
      
   *  it('should call initializeGames() with zero arguments', () => {
        spy = spyOn(service, 'initializeGames').and.returnValue();
        expect(service.initializeGames()).toHaveBeenCalled();
      })
   */
});