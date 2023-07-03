import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    return this.service.loggedIn();
  }
}
