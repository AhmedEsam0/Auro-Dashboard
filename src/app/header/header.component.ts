import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from "./notifications/notifications.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NotificationsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userMenuVisible = false;
  showNotificationComponent: boolean = false;

  @ViewChild('userIcon') userIcon!: ElementRef;
  @ViewChild('userDropdown') userDropdown!: ElementRef;

  initializeNotificationComponent() {
    this.showNotificationComponent = !this.showNotificationComponent;
  }
  toggleUserMenu(): void {
    this.userMenuVisible = !this.userMenuVisible;
  }

  logout(): void {
    console.log('Logging out...');
    this.userMenuVisible = false;
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    const clickedInsideIcon = this.userIcon?.nativeElement.contains(target);
    const clickedInsideDropdown =
      this.userDropdown?.nativeElement.contains(target);

    if (!clickedInsideIcon && !clickedInsideDropdown) {
      this.userMenuVisible = false;
    }
  }
}
