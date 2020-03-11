import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataLibraryModule } from 'data-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
