import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ComponentPref, DialogComponent} from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qwix';

  constructor(public dialog: MatDialog) {}

  openDialog() {

    const style: ComponentPref = {
     width: '400px',
      height: '200px',
      'background-image': ''
    }
    this.dialog.open(DialogComponent, {
      data: {text: 'yoni', design: style},

    });
  }

}
