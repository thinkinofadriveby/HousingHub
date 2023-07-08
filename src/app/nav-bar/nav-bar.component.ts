import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser!: string | null;
  showDropdown = false;
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
    this.showDropdown = false;
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token'); 
    return this.loggedInUser;
  }

  onLogout() {
    this.showDropdown = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertify.success('✈️ Logged out!');  }
}
