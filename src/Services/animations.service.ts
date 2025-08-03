import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti/dist/confetti.module.mjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  fireworksFromButton(button: HTMLElement) {
    const item = button.closest('.moderation-item') as HTMLElement || button.closest('.settings') as HTMLElement;
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

}
