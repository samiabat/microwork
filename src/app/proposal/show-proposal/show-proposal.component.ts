import { Component } from '@angular/core';
import { ShowJobComponent } from 'src/app/job/show-job/show-job.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-proposal',
  templateUrl: './show-proposal.component.html',
  styleUrls: ['./show-proposal.component.css']
})
export class ShowProposalComponent {
  job = ShowJobComponent.getId();
  proposalList:any;
  check = false;
  user:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    if (this.job!==undefined) {
      this.user = this.job.customer;
    }
    this.getProposal()
  }

  getProposal(){
    this.service.getProposal().subscribe((data)=>{
      this.proposalList = data;
      this.check = true;
    })
  }
}
