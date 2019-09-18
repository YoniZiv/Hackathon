import { Component, OnInit, Input } from '@angular/core';
import { ComponentPref } from '../Models/componentPref';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  @Input() componentPref: ComponentPref;
  componentType: string = "";

  textType: string = "text";
  imageType: string = "image";

  constructor() { }

  ngOnInit() {

  }

}
