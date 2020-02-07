import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { logEntryComponent } from './logEntrycomponent';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    logEntryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [logEntryComponent]
})
export class AppModule { }
