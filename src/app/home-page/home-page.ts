import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MapCard } from '../map-card/map-card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, MapCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
