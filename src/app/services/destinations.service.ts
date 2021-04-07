import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Destination } from './destinations';

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>('assets/destinations.json');
  }
}
