import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModerationItem } from '../../../Models/ModerationItem.model';
import { AnimationsService } from '../../../../Services/animations.service';


@Component({
  selector: 'app-moderation-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moderation-card.component.html',
  styleUrl: './moderation-card.component.css',
})
export class ModerationCardComponent {
  constructor(private animations:AnimationsService){}
  @Input() item: ModerationItem;
  @Output() approve: EventEmitter<ModerationItem> =
    new EventEmitter<ModerationItem>();
  @Output() reject: EventEmitter<ModerationItem> =
    new EventEmitter<ModerationItem>();


  
  triggerSlider(button: HTMLElement, action: 'approved' | 'rejected') {
    if (action === 'approved') {
      this.animations.fireworksFromButton(button);
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
