import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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



  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }



}
