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
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
