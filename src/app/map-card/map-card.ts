import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-card.html',
  styleUrl: './map-card.css',
})
export class MapCard {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
}
