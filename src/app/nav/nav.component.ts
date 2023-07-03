import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: any;

  constructor(private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout(): void {
    this.service.logout()
    this.router.navigate(['login'])
  }

  loggedIn() {
    return this.service.loggedIn();
  }

  getCurrentUser() {
    return this.service.getProfile().subscribe((response) => {
      this.user = response["user"];
    })
  }
}
