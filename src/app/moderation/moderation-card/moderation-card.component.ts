import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModerationItem } from '../../Models/ModerationItem.model';
import confetti from 'canvas-confetti/dist/confetti.module.mjs';

@Component({
  selector: 'app-moderation-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moderation-card.component.html',
  styleUrl: './moderation-card.component.css',
})
export class ModerationCardComponent {
  @Input() item: ModerationItem;
  @Output() approve: EventEmitter<ModerationItem> =
    new EventEmitter<ModerationItem>();
  @Output() reject: EventEmitter<ModerationItem> =
    new EventEmitter<ModerationItem>();


  fireworksFromButton(button: HTMLElement) {
    const item = button.closest('.moderation-item') as HTMLElement;
    if (!item) return;
    const rect = item.getBoundingClientRect();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const origins = [
      // Top center
      {
        x: (rect.left + rect.width / 2) / width,
        y: rect.top / height,
      },
      // Bottom center
      {
        x: (rect.left + rect.width / 2) / width,
        y: (rect.top + rect.height) / height,
      },
      // Left center
      {
        x: rect.left / width,
        y: (rect.top + rect.height / 2) / height,
      },
      // Right center
      {
        x: (rect.left + rect.width) / width,
        y: (rect.top + rect.height / 2) / height,
      },
    ];

    const defaults = {
      startVelocity: 35,
      spread: 360,
      ticks: 50,
      scalar: 0.9,
      zIndex: 9999,
    };

    origins.forEach((origin) => {
      confetti({
        ...defaults,
        particleCount: 150,
        origin,
      });
    });
  }

  triggerSlider(button: HTMLElement, action: 'approved' | 'rejected') {
    if (action === 'approved') {
      this.fireworksFromButton(button);
    }

    const item = button.closest('.moderation-item') as HTMLElement;
    if (!item) return;

    const shine = item.querySelector('.diagonal-shine') as HTMLElement;
    if (!shine) return;

    shine.classList.remove('active', 'approved', 'rejected');
    void shine.offsetWidth;

    shine.classList.add('active', action); // يضيف اللون بناءً على الـ action
    setTimeout(() => {
      item.classList.remove('pending', 'approved', 'rejected');
      item.classList.add(action);
      this.item.status = action;
    }, 1000);

    if (action === 'approved') {
      this.approve.emit(this.item);
    } else {
      this.reject.emit(this.item);
    }
  }
}
