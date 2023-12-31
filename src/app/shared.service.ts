import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly ApiUrl  = "https://microworks.onrender.com";

  constructor(private http:HttpClient) {}

  login(data:any){
    return this.http.post(this.ApiUrl + "/api/login/", data);
  }

  getProfile():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/profile/`)
  }

  getCustomer():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/customers/`)
  }

  getCustomerByUsername(username:string):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/customers/${username}/`)
  }

  addCustomer(data:any){
    return this.http.post(this.ApiUrl + `/customers/`, data);
  }

  updateCustomer(id:Number|String, data:any){
    return this.http.put(this.ApiUrl + `/customers/${id}/`, data);
  }

  deleteCustomer(id:Number|String){
    return this.http.delete(this.ApiUrl + `/customers/${id}/`);
  }
  getJob():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/jobs/`);
  }

  getJobbyId(id:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/jobs/${id}/`)
  }

  addJob(data:any){
    return this.http.post(this.ApiUrl + `/jobs/`, data);
  }

  userReport(id:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/report/${id}/`)
  }

  updateJob(id:Number|String, data:any){
    return this.http.put(this.ApiUrl + `/jobs/${id}/`, data);
  }

  deleteJob(id:any){
    return this.http.delete(this.ApiUrl + `/jobs/` + id);
  }


  getProposal():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/proposals/`);
  }

  getProposalByJob(job:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/proposals/${job}/`)
  }

  getProposalById(id:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/proposals/${id}/`)
  }
  addProposal(data:any){
    return this.http.post(this.ApiUrl + `/proposals/`, data);
  }

  updateProposal(id:Number|String, data:any){
    return this.http.put(this.ApiUrl + `/proposals/${id}/`, data);
  }

  deleteProposal(id:Number|String){
    return this.http.delete(this.ApiUrl + `/proposals/${id}/`);
  }

  getMessage(someone:any):Observable<any>{
    return this.http.get<any>(this.ApiUrl + `/messages/${someone}/`)
  };

  review(data:any){
    return this.http.post(this.ApiUrl + `/reviews/`, data)
  }

  report(data:any){
    return this.http.post(this.ApiUrl + `/reports/`, data);
  }

  getReview(id:any):Observable<any>{
    return this.http.get<any>(this.ApiUrl + `/reviews/${id}/`)
  };

  getReport(id:any):Observable<any>{
    return this.http.get<any>(this.ApiUrl + `/reports/${id}/`)
  };

  sendMessage(data:any){
    return this.http.post(this.ApiUrl + `/messages/`, data);
  }

  loggedIn(){
  return !!localStorage.getItem('token');
  }

  getToken(){
  return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
}
