import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface ComponentPref {
  // componentType: string;

  'margin-left': string;
  'margin-top': string;
  'margin-right': string;
  'margin-bottom': string;

  'padding-top': string;
  'padding-left': string;
  'padding-right': string;
  'padding-bottom': string;

  'width': string;
  'height': string;
  'color': string;
  'font-size': string;
  'opacity': string;

  'background-image': string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})



export class DialogComponent implements OnInit {

  // @Input() design: ComponentPref;
  // @Input() text: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
