import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building } from '../models/aula.model';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private apiUrl = 'https://final-project-itla-backend-production.up.railway.app/api/buildings';
  
  constructor(private http: HttpClient) { }

  getBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(this.apiUrl);
  }
}
