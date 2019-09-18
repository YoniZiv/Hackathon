import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(32.0853, 34.7818),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.createMarker();
  }

  createMarker() {

    // list of hardcoded positions markers
    var myLatLngList = {
      myLatLng: [{ lat: 32.0132, lng: 34.7480 }, { lat: 32.0840, lng: 34.8878 }]
    };

    //iterate latLng and add markers
    for (const data of myLatLngList.myLatLng) {
      var marker = new google.maps.Marker({
        position: data,
        map: this.map,
        title: 'markers',
      });
      marker.addListener('click', (e) => {
        console.log("yoni", e)
      })
    }
  };

}
