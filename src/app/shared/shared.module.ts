import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './componend/card/card.component';
import { notificateFor, NotificationComponent } from './componend/notification/notification.component';
import { MaxPipe } from './pipe/max.pipe';
import { PhonePipe } from './pipe/phone.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { SlideOnDragDirective } from './dirctive/slide-on-drag.directive';
@NgModule({
  declarations: [
    CardComponent,
    PhonePipe,
    MaxPipe,
    NotificationComponent,
    SearchPipe,
    notificateFor,
    SlideOnDragDirective
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
  ],
  exports: [
    CardComponent,
    CommonModule,
    NotificationComponent,

    DragDropModule,
    MatButtonModule,
    SearchPipe,
    notificateFor,
    SlideOnDragDirective
  ]
})
export class SharedModule { }
