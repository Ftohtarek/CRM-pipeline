import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './componend/card/card.component';
import { NotificationComponent } from './componend/notification/notification.component';
import { MaxPipe } from './pipe/max.pipe';
import { PhonePipe } from './pipe/phone.pipe';
 

@NgModule({
  declarations: [
    CardComponent,
    PhonePipe,
    MaxPipe,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
  ],
  exports: [
    CardComponent,
    CommonModule,
    DragDropModule,

  ]
})
export class SharedModule { }
