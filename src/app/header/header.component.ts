import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userMenuVisible = false;

  @ViewChild('userIcon') userIcon!: ElementRef;
  @ViewChild('userDropdown') userDropdown!: ElementRef;

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
    const clickedInsideDropdown = this.userDropdown?.nativeElement.contains(target);

    if (!clickedInsideIcon && !clickedInsideDropdown) {
      this.userMenuVisible = false;
    }
  }
  
}
