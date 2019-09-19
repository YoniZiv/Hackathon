import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/maps/map/map.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DynamicComponent } from './dynamic/dynamic.component';
import { TextComponent } from './text/text.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatStepperModule} from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsComponent } from './sections/sections.component';
import { TrashcanComponent } from './trashcan/trashcan.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogDraggableTitleDirective } from './dialog-draggable-title.directive';
import { ModalPositionCache } from './modal-position.cache';
import { MatExpansionModule } from '@angular/material/expansion';
import { StepperComponent } from './components/stepper/stepper.component';
import { SlotsComponent } from './components/slots/slots.component';
import { SetAppConfirmComponent } from './components/set-app-confirm/set-app-confirm.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DynamicComponent,
    TextComponent,
    DialogComponent,

    SectionsComponent,
    TrashcanComponent,
    DialogDraggableTitleDirective,
    StepperComponent,
    SlotsComponent,
    SetAppConfirmComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,

    DragDropModule,
    MatCheckboxModule,

    FormsModule,

    DragDropModule,

    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule

  ],
  providers: [ModalPositionCache],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, SetAppConfirmComponent],
})
export class AppModule { }
