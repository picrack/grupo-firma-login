import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-protected-page',
  templateUrl: './protected-page.component.html',
  styleUrls:['./protected-page.component.css']
})
export class ProtectedPageComponent implements OnInit {
  userData: any;

  constructor() {}

  ngOnInit(): void {
    const user = localStorage.getItem('userData');
    if (user) {
      this.userData = JSON.parse(user);
    } else {
      console.error('No hay data');
    }
  }
}