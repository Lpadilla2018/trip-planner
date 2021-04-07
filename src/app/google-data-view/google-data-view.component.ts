import { Component, OnInit } from '@angular/core';

// import destination data
import { DestinationsService } from '../services/destinations.service';

import { Destination } from '../services/destinations';

@Component({
  selector: 'app-google-data-view',
  templateUrl: './google-data-view.component.html',
  styleUrls: ['./google-data-view.component.css'],
})
export class GoogleDataViewComponent implements OnInit {
  destination: Destination[];
  placesToGo: any;
  myDestinationList: Array<any>;
  total: number;
  tripName: any;

  constructor(private destinationService: DestinationsService) {}

  ngOnInit() {
    // on init if there is data in the local storage, set that data for the app to use
    let storageData = window.localStorage.getItem('myDestinationList');
    if (storageData != null) {
      this.myDestinationList = JSON.parse(storageData);
    }
  }

  // confirms user if they want to delete the trip
  confirmDelete(i) {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.removeTrip(i);
    }
  }

  // if delete, deletes the trip by index
  removeTrip(index: number) {
    this.myDestinationList.splice(index, 1);
  }

  // Not implemented
  // addTrip(i){
  //   let newTrip: any = { title: i.name}
  //   this.myDestinationList.push(newTrip);
  //   console.log(this.myDestinationList);
  // }

  //  used to update total amount
  updateTotal(): number {
    this.total = 0;
    for (var i = 0; i < this.myDestinationList.length; i++) {
      this.total +=
        (this.myDestinationList[i].cost.food +
          this.myDestinationList[i].cost.transportation +
          this.myDestinationList[i].cost.attractions) *
        this.myDestinationList[i].days;
    }
    return this.total;
  }

  // saves trip to local storage
  saveTrip() {
    window.localStorage.setItem(
      'myDestinationList',
      JSON.stringify(this.myDestinationList)
    );
  }

  // grabs data using the service. data is stored as json internally
  getDestinations(): void {
    this.destinationService.getDestinations().subscribe((result) => {
      console.log(result);
      this.myDestinationList = result;
    });
  }
}
