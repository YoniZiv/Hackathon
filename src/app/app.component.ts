import { Component, Renderer2 } from '@angular/core';

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

  isEditMode = true;

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

    this.openDialog(event)
    // this.renderer.setStyle(event.item.element.nativeElement, 'background','blue')
    console.log(event)

    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  constructor(public dialog: MatDialog, private renderer: Renderer2) { }


  openDialog(e) {
    console.log(e)
    const style: ComponentPref = {

      width: e.item.offsetWidth,
      height: e.item.offsetHeight,
      'background-image': '',
      'background-color': e.item.element.nativeElement.style.backgroundColor
    }
    this.dialog.open(DialogComponent, {
      data: { text: 'yoni', design: style, elem: e },


    });
  }



}
