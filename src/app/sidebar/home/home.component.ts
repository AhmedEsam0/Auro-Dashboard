import { Component, Input } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { StatCardComponent } from './stat-card/stat-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgChartsModule, StatCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  stats = [
    {
      title: 'Facebook Followers',
      total: 1450,
      targetDiffPercent: -2.0,
      followersHistory: [20000,10000,5000,2000,1000],
    },
    {
      title: 'Instagram Followers',
      total: 980,
      targetDiffPercent: 5.6,
      followersHistory: [100,800,5000],
    },
    {
      title: 'TikTok Followers',
      total: 2050,
      targetDiffPercent: 1.2,
      followersHistory: [2000, 20100, 50000, 130000, 203000, 540000, 880000],
    },
    {
      title: 'Snapchat Followers',
      total: 2050,
      targetDiffPercent: 1.2,
      followersHistory: [2000, 20100, 50000, 130000, 203000, 540000, 880000],
    },
  ];
}
