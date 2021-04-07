import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleDataViewComponent } from './google-data-view/google-data-view.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    GoogleDataViewComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    
    HttpClientModule,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyxk34NTV36AT1oQ-kqd4ZyJ8X7tMImqE'
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

