# trip-planner

An application that displays information about your trip!

## Setup:
    **Have node and npm installed**

    cd to file
    npm install
    ng serve 

    open browser localhost: port#

    click on load
    click on save
    reload to make sure everything has been processed

    ready to use app

    ***(I'm using my personal key for the google api. Hopefully it doesn't give you too much trouble)***

## Data:
    destinations - src/assests/destinations.JSON

## Service:
    destinations service - src/app/service/destinationsservices.ts

## 3rd Party Package:
    agm - google maps package

## Framework:
    Bootsrap

## Components:
    google-data-view
        -stores information from json request to local storage
        -displays local storage info to a tabular format
    google-maps
        -grabs the stored information in the local storage
        -displays location on google map by using json lat and long information
        -displays name and total cost information of each destination markers
        -ability to zoom to markers

## Scope Of Work:

    This app is supposed to help users plan out their trip. The app loads in data using the http module. This module brings in a JSON file then you 
    can store the information by clicking "save". Once data has been stored, you can reload the app to see the map display information from the local sotrage.
    User's can edit how many days they would like to stay in each destination. The cost information has been hard coded in while the total cost of the trip/
    cost per day is dynamic. The user can also delete a destination. 
    
    *If you would like to restart, click on the load button and save.*
    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


