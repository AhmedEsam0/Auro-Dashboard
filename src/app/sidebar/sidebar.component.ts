import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isSubmenuOpen = false;

  toggleStyle(magicEl: HTMLLIElement) {
    // console.log(magicEl);
    if (magicEl.classList.contains('active')) {
      magicEl.classList.remove('active');
    } else {
      magicEl.classList.add('active');
    }
  }
  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  constructor(public router: Router) {}

  isMagicActive(): boolean {
    return this.router.url.startsWith('/Magic');
   }

}
