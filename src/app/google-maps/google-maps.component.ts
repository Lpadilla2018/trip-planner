import { Component, OnInit } from '@angular/core';

// import destination data
import { DestinationsService } from '../services/destinations.service';

import { Destination } from '../services/destinations';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  constructor(private destinationService: DestinationsService) {}

  myDestinationList: Array<any>;

  // grabs data that is stored in the local storage
  ngOnInit() {
    this.myDestinationList = this.getLocalData();
  }

  title: string = 'Trip Locations';
  lat: number = 33.388202;
  lng: number = -112.295116;
  zoomLevel: number = 2;

  // click on the map, zooms to that location
  // for navigating within the map
  changeLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  // when marker is clicked, sets zoom level and centers to that location
  setLocation(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }

  // grabs data from local storage
  getLocalData() {
    const storageData = JSON.parse(
      window.localStorage.getItem('myDestinationList')
    );
    return storageData;
  }
}
