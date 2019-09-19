import { Component, OnInit } from '@angular/core';
import {SetAppConfirmComponent} from '../set-app-confirm/set-app-confirm.component';
import {ComponentPref, DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  public slotList = [{
    "id": 1,
    "slotDate": "19.09.2019",
    "slotTime": "10:15",
    "serviceName": "Foxtrot"
  }, {
    "id": 2,
    "slotDate": "23.09.2019",
    "slotTime": "17:32",
    "serviceName": "India"
  }, {
    "id": 3,
    "slotDate": "27.09.2019",
    "slotTime": "16:55",
    "serviceName": "Victor"
  }, {
    "id": 4,
    "slotDate": "20.09.2019",
    "slotTime": "8:18",
    "serviceName": "X-ray"
  }, {
    "id": 5,
    "slotDate": "21.09.2019",
    "slotTime": "16:24",
    "serviceName": "Kilo"
  }, {
    "id": 6,
    "slotDate": "29.09.2019",
    "slotTime": "9:01",
    "serviceName": "November"
  }, {
    "id": 7,
    "slotDate": "29.09.2019",
    "slotTime": "14:30",
    "serviceName": "Tango"
  }, {
    "id": 8,
    "slotDate": "27.09.2019",
    "slotTime": "11:47",
    "serviceName": "Kilo"
  }, {
    "id": 9,
    "slotDate": "24.09.2019",
    "slotTime": "14:54",
    "serviceName": "Lima"
  }, {
    "id": 10,
    "slotDate": "26.09.2019",
    "slotTime": "19:44",
    "serviceName": "Charlie"
  }, {
    "id": 11,
    "slotDate": "22.09.2019",
    "slotTime": "9:25",
    "serviceName": "Whiskey"
  }, {
    "id": 12,
    "slotDate": "19.09.2019",
    "slotTime": "17:17",
    "serviceName": "Echo"
  }, {
    "id": 13,
    "slotDate": "28.09.2019",
    "slotTime": "10:06",
    "serviceName": "India"
  }, {
    "id": 14,
    "slotDate": "27.09.2019",
    "slotTime": "16:14",
    "serviceName": "Kilo"
  }, {
    "id": 15,
    "slotDate": "22.09.2019",
    "slotTime": "12:23",
    "serviceName": "Mike"
  }, {
    "id": 16,
    "slotDate": "20.09.2019",
    "slotTime": "19:17",
    "serviceName": "Tango"
  }, {
    "id": 17,
    "slotDate": "27.09.2019",
    "slotTime": "9:40",
    "serviceName": "X-ray"
  }, {
    "id": 18,
    "slotDate": "26.09.2019",
    "slotTime": "20:17",
    "serviceName": "Alfa"
  }, {
    "id": 19,
    "slotDate": "25.09.2019",
    "slotTime": "13:58",
    "serviceName": "Tango"
  }, {
    "id": 20,
    "slotDate": "23.09.2019",
    "slotTime": "17:26",
    "serviceName": "November"
  }]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.slotList)
  }

  setAppointment(){
      this.dialog.open(SetAppConfirmComponent, {
        data: {},
      });
    }



}
