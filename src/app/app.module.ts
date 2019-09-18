import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
