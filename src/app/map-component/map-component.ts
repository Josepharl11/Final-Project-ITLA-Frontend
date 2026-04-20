import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Building } from '../models/aula.model';
import { MapService } from '../Services/map-service';

@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css',
})

export class MapComponent implements OnInit{
  buildings: Building[] = [];
  buildingSelected: Building | null = null;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getBuildings().subscribe({
      next: (data) => {
        this.buildings = data;
        console.log("ESTRUCTURA EXACTA:", JSON.stringify(this.buildings[0].floors, null, 2));
      },
      error: (err) => {
        console.log('Error al obtener Edificios del Backend', err);
      }
    });
  }

  selectedArea(event: MouseEvent) {
    const target = event.target as Element;
    const clicked = target.closest('[id]') as Element | null;
    const id = clicked?.getAttribute('id');

    if (id) {
      this.buildingSelected = this.buildings.find(e => e.id === id) || null;
    }
  }

  closeInfo() {
    this.buildingSelected = null;
  }

  goToHome() {
    window.location.href = '/';
  }
}