import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { ReviewComponent } from './review/review.component';
import { ReportComponent } from './report/report.component';
import { JobComponent } from './job/job.component';
import { AuthGuaredGuard } from './auth.guard';
import { AddEditJobComponent } from './job/add-edit-job/add-edit-job.component';
import { ProposalComponent } from './proposal/proposal.component';
import { AddEditProposalComponent } from './proposal/add-edit-proposal/add-edit-proposal.component';
import { ShowJobComponent } from './job/show-job/show-job.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';

const routes: Routes = [{path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent},
{path: 'home', component: CustomerComponent},{path:"message", component:MessageComponent},{path:"review", component:ReviewComponent},{path:'report', component: ReportComponent} , {path:"proposals", component:ProposalComponent},{path: "proposals", component:ProposalComponent},{path:"createProposal", component:AddEditProposalComponent}, {path: 'customer', component: ShowCustomerComponent}, {path: 'job', component: ShowJobComponent},
{path: 'jobs', component: JobComponent , canActivate:[AuthGuaredGuard]}, {path:'createJob', component:AddEditJobComponent, canActivate:[AuthGuaredGuard]}, {path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
