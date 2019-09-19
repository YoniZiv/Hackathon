import { Component, Inject, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';


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
  public textSelector = "";
  public fontSizeSelector = "";
  public colorSelector = "";
  public marginLeftSelector = "";
  public marginRightSelector = "";
  public backgroundImageSelector = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private renderer: Renderer2) { }

  ngOnInit() {
    var nativeElem = this.data.elem.item.element.nativeElement

    this.widthSelector = nativeElem.offsetWidth + 'px';
    this.heightSelector = nativeElem.offsetHeight + 'px';
    this.fontSizeSelector = nativeElem.style.fontSize;
    this.colorSelector = nativeElem.style.color;
    this.marginLeftSelector = nativeElem.marginLeft;
    this.marginRightSelector = nativeElem.marginRight;
    this.textSelector = nativeElem.innerText
    this.backgroundImageSelector = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
  }

  public onBackGroundChanged(event: string, data: any): void {
    debugger;
    var color = data.color;

    this.backgroundColorSelector = data.color;
  }

  saveChanges() {
    const nativeElem = this.data.elem.item.element.nativeElement;

    this.renderer.setStyle(nativeElem, 'background-color', this.backgroundColorSelector);
    this.renderer.setStyle(nativeElem, 'height', this.heightSelector);
    this.renderer.setStyle(nativeElem, 'width', this.widthSelector);
    this.renderer.setStyle(nativeElem, 'font-size', this.fontSizeSelector);
    this.renderer.setStyle(nativeElem, 'color', this.colorSelector);
    this.renderer.setStyle(nativeElem, 'margin-left', this.marginLeftSelector);
    this.renderer.setStyle(nativeElem, 'margin-right', this.marginRightSelector);
    this.renderer.setStyle(nativeElem, 'background-image', `url(${this.backgroundImageSelector})`);
    this.renderer.setStyle(nativeElem, 'background-size', "100%");
    this.renderer.setStyle(nativeElem, 'background-position', "center");
    this.renderer.setStyle(nativeElem, 'background-repeat', "no-repeat");


    this.renderer.setProperty(nativeElem, 'innerText', this.textSelector);

  }

}
