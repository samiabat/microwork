import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent {
  customerList$!:Observable<any[]>;
  jobList$!:Observable<any[]>;
  proposalList$!:Observable<any[]>;
  job: any;
  proposal: any;

  constructor(private service:SharedService) {}


  @Input() customer:any;
  id:Number = 0;
  username:string = "";
  password:string = "";
  email:string = "";



  ngOnInit(): void {
    this.id = this.customer.id;
    this.username = this.customer.username;
    this.password = this.customer.password;
    this.customer = this.customer;
    this.job = this.customer.job;
    this.proposal = this.customer.proposal;
    this.email = this.customer.email;
    this.customerList$ = this.service.getCustomer();
    this.jobList$ = this.service.getJob();
    this.proposalList$ = this.service.getProposal();
  }

  addCustomer (){

  }

  updateCustomer (){

  }
}
