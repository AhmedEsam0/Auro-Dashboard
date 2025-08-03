import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimationsService } from '../../../Services/animations.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor(private animations: AnimationsService) {}
  profile = {
    fullName: 'Sarah Johnson',
    activityName: 'Digital Marketing Pro',
    activityType: 'Activity Type',
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@email.com',
    facebook: '',
    instagram: '',
  };

  saveChanges(btn: HTMLButtonElement) {
    this.animations.fireworksFromButton(btn);
    console.log('Saved profile:', this.profile);
    // alert('Changes saved!');
  }

  cancel() {
    alert('Cancelled.');
  }
}
