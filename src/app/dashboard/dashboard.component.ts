import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data!: any;
  username!: string;
  report:any;
  check = false;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    return this.sharedService.getProfile().subscribe((response) =>{
      this.sharedService.getCustomerByUsername(response["user"]).subscribe((res)=>{
        this.sharedService.userReport(res.id).subscribe((response)=>{
        this.report = response;
        this.data = res;
        this.check = true;
        });
      })

    })
  }

}
