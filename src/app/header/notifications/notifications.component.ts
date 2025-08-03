import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  @Output() outsideNotificationClick: EventEmitter<null> =
    new EventEmitter<null>();
}
