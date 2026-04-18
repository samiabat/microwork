import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  categories = [
    { name: 'Web Development', icon: 'bi-code-slash', bg: '#EEF2FF', color: '#4F46E5' },
    { name: 'Design & Creative', icon: 'bi-palette', bg: '#FDF2F8', color: '#9D174D' },
    { name: 'Data Science', icon: 'bi-bar-chart', bg: '#FEF3C7', color: '#D97706' },
    { name: 'Mobile Apps', icon: 'bi-phone', bg: '#D1FAE5', color: '#059669' },
    { name: 'Writing', icon: 'bi-file-text', bg: '#FEE2E2', color: '#DC2626' },
    { name: 'Marketing', icon: 'bi-megaphone', bg: '#E0F2FE', color: '#0284C7' },
    { name: 'Video & Audio', icon: 'bi-camera-video', bg: '#FDF4FF', color: '#9333EA' },
    { name: 'Finance', icon: 'bi-currency-dollar', bg: '#F0FDF4', color: '#16A34A' },
  ];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  loggedIn(): boolean {
    return this.sharedService.loggedIn();
  }
}
