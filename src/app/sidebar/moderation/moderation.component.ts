import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ModerationItem } from '../../Models/ModerationItem.model';
import { ModerationCardComponent } from './moderation-card/moderation-card.component';

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule, ModerationCardComponent],
  templateUrl: './moderation.component.html',
  styleUrl: './moderation.component.css',
})
export class ModerationComponent {
  pendingItems: ModerationItem[] = [
    {
      title: 'Hello',
      content: 'Hi there!',
      status: 'pending',
      image: 'Logo.JPG',
    },
    {
      title: 'Hello',
      content: 'Hi there!',
      status: 'pending',
      image: 'Logo.JPG',
    },
    {
      title: 'Hello',
      content: 'Hi there!',
      status: 'pending',
      image: 'Logo.JPG',
    },
    
  ];
  approvedItems: ModerationItem[] = [];
  rejectedItems: ModerationItem[] = [];

  selectedTab: 'pending' | 'approved' | 'rejected' = 'pending';

  setTab(tab: 'pending' | 'approved' | 'rejected') {
    this.selectedTab = tab;
  }

  approveItem(item: ModerationItem) {
    setTimeout(() => {
      this.pendingItems = this.pendingItems.filter((i) => i !== item);
      this.approvedItems.push(item);
    }, 3000);
  }
  rejectItem(item: ModerationItem) {
    setTimeout(() => {
      this.pendingItems = this.pendingItems.filter((i) => i !== item);
      this.rejectedItems.push(item);
    }, 3000);
  }
}
