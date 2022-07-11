import { TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";

describe('HomeComponent', ()=>{
  it('should create the homescreen', () => { 
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  });
})