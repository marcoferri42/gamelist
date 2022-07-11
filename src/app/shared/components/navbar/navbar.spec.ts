import { TestBed } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";

describe('NavbarComponent', () => {
    it('should create the NavBar', () => { 
        const fixture = TestBed.createComponent(NavbarComponent);
        const navbar = fixture.debugElement.componentInstance;
        expect(navbar).toBeTruthy();
    });
})