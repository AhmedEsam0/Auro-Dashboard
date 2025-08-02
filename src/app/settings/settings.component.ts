import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  avatarUrl: string = 'Logo.JPG';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';

  onAvatarChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.avatarUrl = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveChanges() {
    console.log('Saving changes...');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
  }
}
