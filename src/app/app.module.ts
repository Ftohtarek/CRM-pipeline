import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealComponent } from './component/deal/deal.component';
import { CrmErrorHandler } from './Error/crm-error-handler'

@NgModule({
  declarations: [
    AppComponent,
    DealComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [

    { provide: ErrorHandler, useClass: CrmErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
