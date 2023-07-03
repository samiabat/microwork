import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntercepterService {

  token:any;
  constructor(private service: SharedService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = this.service.getToken();
    if (this.token) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
