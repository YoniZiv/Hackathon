import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { MatDialog } from '@angular/material';
import { ComponentPref, DialogComponent } from './components/dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qwix';


  headers = [
    {
      componentType: 'text',
      text: 'test',
      color: 'green',
      style: {
        'font-size': '30px',
        'color': 'red',
      }
    },
    {
      componentType: 'text',
      text: 'test',
      style: {
        'font-size': '30px',
        'color': 'red',
        'padding': '10px'
      }

    }
  ];

  bodys = [
  ];

  footers = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];

  components = [
    {
      componentType: 'text',
      text: 'test',
      color: 'green',
      style: {
        'font-size': '30px',
        'color': 'red',
      }
    }
  ]

  trashes = []

  onDrop(event: CdkDragDrop<string[]>) {
    debugger;
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {

    const style: ComponentPref = {
      width: '400px',
      height: '200px',
      'background-image': ''
    }
    this.dialog.open(DialogComponent, {
      data: { text: 'yoni', design: style },

    });
  }

}
