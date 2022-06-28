import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  constructor() { }

  /**
   * Reindirizza a GitHub
   */
  redirect(){
    window.location.replace("http://www.w3schools.com");
    console.log("clicked")
  }
}