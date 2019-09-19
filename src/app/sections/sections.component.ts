import { Component, OnInit, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  @Output() HeaderBackgroundChanged = new EventEmitter<string>();
  @Output() BodyBackgroundChanged = new EventEmitter<string>();
  @Output() FooterBackgroundChanged = new EventEmitter<string>();

  ngOnInit() {
  }

  public arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  public selectedColor: string = 'color1';

  public color1: string = 'white';
  public color2: string = 'white';
  public color3: string = 'white';

  public cmykValue: string = '';

  public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

  constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) { }

  public onEventLog(event: string, data: any): void {
    debugger;
    console.log(event, data);

    var color = data.color;
  }

  public onHeaderChanged(event: string, data: any): void {
    // debugger;
    var color = data.color;

    this.HeaderBackgroundChanged.emit(data.color);
  }

  public onBodyChanged(event: string, data: any): void {
    debugger;
    var color = data.color;

    this.BodyBackgroundChanged.emit(data.color);
  }

  public onFooterChanged(event: string, data: any): void {
    debugger;
    var color = data.color;

    this.FooterBackgroundChanged.emit(data.color);
  }


  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }

}
