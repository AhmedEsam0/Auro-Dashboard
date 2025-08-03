import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-magic',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './magic.component.html',
  styleUrl: './magic.component.css',
})
export class MagicComponent {
  selectedMagicTab: string = '';
}
