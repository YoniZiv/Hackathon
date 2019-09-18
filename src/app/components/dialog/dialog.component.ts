import {Component, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface ComponentPref {
  // componentType: string;

  // 'margin-left': string;
  // 'margin-top': string;
  // 'margin-right': string;
  // 'margin-bottom': string;
  //
  // 'padding-top': string;
  // 'padding-left': string;
  // 'padding-right': string;
  // 'padding-bottom': string;

  'width': string;
  'height': string;
  // 'color': string;
  // 'font-size': string;
  // 'opacity': string;
  'background-color': string;

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

  public backgroundColorSelector = "";
  public widthSelector = "";
  public heightSelector = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColorSelector = this.data.elem.item.element.nativeElement.style.backgroundColor;
    this.widthSelector = this.data.elem.item.element.nativeElement.offsetWidth + 'px';
    this.heightSelector = this.data.elem.item.element.nativeElement.offsetHeight + 'px';
  }


  saveChanges(){
    this.renderer.setStyle(this.data.elem.item.element.nativeElement, 'background-color', this.backgroundColorSelector);
    this.renderer.setStyle(this.data.elem.item.element.nativeElement, 'height', this.heightSelector);
    this.renderer.setStyle(this.data.elem.item.element.nativeElement, 'width', this.widthSelector);
  }
}
