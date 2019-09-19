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

  headerColor = ''
  bodyColor = 'white'
  footerColor = 'white'

  headers = [
    {
      componentType: 'text',
      text: 'Welcome to HairStudio',
      style: {
        'font-size': '30px',
        'color': 'black',
        'background-color': 'rgba(155,122,122,0)'
      }
    }
  ];

  bodys = [
    {
      componentType: 'text',
      text: 'test',
      style: {
        'font-size': '30px',
        'color': 'red',
      }
    }
  ];

  footers = [
    {
      componentType: 'text',
      text: 'F',
      style: {
        'font-size': '30px',
        'color': 'white',
        'background-color': '#3b5998 ',
        'border-radius': '50%',
        'width': '35px',
        'text-align': 'center',
        'margin-top': '10px',
        'margin-left': '10px',
        'font-family': 'sans-serif',
        'margin-right': '10px'
      }
    },
    {
      componentType: 'text',
      text: 'T',
      style: {
        'font-size': '30px',
        'color': 'white',
        'background-color': '#1da1f3 ',
        'border-radius': '50%',
        'width': '35px',
        'text-align': 'center',
        'margin-top': '10px',
        'margin-left': '10px',
        'font-family': 'sans-serif',
        'margin-right': '10px'
      }
    },
    {
      componentType: 'text',
      text: 'I',
      style: {
        'font-size': '30px',
        'color': 'white',
        'background-color': '#fe2f73 ',
        'border-radius': '50%',
        'width': '35px',
        'text-align': 'center',
        'margin-top': '10px',
        'margin-left': '10px',
        'font-family': 'sans-serif',
        'margin-right': '10px'
      }
    }
  ];

  components: any[] = [
    {
      componentType: 'text',
      text: 'Editable Component',
      style: {
        'font-size': '30px',
        'color': 'red',
        'background-color': 'white'
      }
    }
  ]

  trashes = []

  onDrop(event: CdkDragDrop<string[]>) {

    // this.renderer.setStyle(event.item.element.nativeElement, 'background','blue')
    console.log(event)

    if (event.previousContainer == event.container) {
      this.openDialog(event)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousContainer.id == "cdk-drop-list-3") {
        this.components.push(event.previousContainer.data[0]);
      }
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

  onHeaderChanged($event) {
    if ($event) {
      this.headerColor = $event;
    }
  }

  onBodyChanged($event) {
    if ($event) {
      this.bodyColor = $event;
    }
  }

  onFooterChanged($event) {
    if ($event) {
      this.footerColor = $event;
    }
  }



}
