import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/maps/map/map.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DynamicComponent } from './dynamic/dynamic.component';
import { TextComponent } from './text/text.component';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';

import { SectionsComponent } from './sections/sections.component';
import { TrashcanComponent } from './trashcan/trashcan.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DynamicComponent,
    TextComponent,
    DialogComponent,

    SectionsComponent,
    TrashcanComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    DragDropModule,
    MatCheckboxModule

    FormsModule,

    DragDropModule,

    MatDialogModule,
    MatButtonModule,
    MatInputModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
