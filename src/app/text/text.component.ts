import { Component, OnInit, Input } from '@angular/core';
import { ComponentPref } from '../Models/componentPref';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() componentPref: ComponentPref;
  constructor() { }

  ngOnInit() {
    debugger;
    let test = this.componentPref.componentType;
  }

}
