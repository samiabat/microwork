import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ReportComponent } from './report/report.component';
import { ReviewComponent } from './review/review.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { MessageComponent } from './message/message.component';
import { CustomerComponent } from './customer/customer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatCommonModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { SharedService } from './shared.service';
import { IntercepterService } from './intercepter.service';
import { AddEditJobComponent } from './job/add-edit-job/add-edit-job.component';
import { AddEditProposalComponent } from './proposal/add-edit-proposal/add-edit-proposal.component';
import { ShowJobComponent } from './job/show-job/show-job.component';
import { ShowProposalComponent } from './proposal/show-proposal/show-proposal.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    JobComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    ProposalComponent,
    ReportComponent,
    ReviewComponent,
    ShowMessageComponent,
    MessageComponent,
    CustomerComponent,
    AddEditJobComponent,
    AddEditProposalComponent,
    ShowJobComponent,
    ShowProposalComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatCommonModule,
    MatInputModule,
  ],
  providers: [
    SharedService,  {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
