import { NgModule } from '@angular/core';
import { DataLibraryComponent } from './data-library.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [DataLibraryComponent],
  imports: [
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  exports: [DataLibraryComponent]
})
export class DataLibraryModule { }
