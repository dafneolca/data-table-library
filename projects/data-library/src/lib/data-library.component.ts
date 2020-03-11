import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Input } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  title: string;
  first_name: string;
  last_name: string;
  nationality: string;
}

const USER_DATA: User[] = [
  { title: 'Mr', first_name: 'Christopher', last_name: 'Hoffman', nationality: 'United States' },
  { title: 'Mrs', first_name: 'Ruth', last_name: 'Baily', nationality: 'He' },
  { title: 'Mrs', first_name: 'Esmira', last_name: 'Hüseynzada', nationality: 'Azerbaijan' },
  { title: 'Mrs', first_name: 'Azerbaijan', last_name: 'something?', nationality: 'Be' },
  { title: 'Mss', first_name: 'Boron', last_name: 'something?', nationality: 'B' },
  { title: 'Mrs', first_name: 'Carbon', last_name: 'something?', nationality: 'C' },
  { title: 'Mrs', first_name: 'Nitrogen', last_name: 'something?', nationality: 'N' },
  { title: 'Mr', first_name: 'Oxygen', last_name: 'something?', nationality: 'O' },
  { title: 'Mr', first_name: 'Fluorine', last_name: 'something?', nationality: 'F' },
  { title: 'Mrs', first_name: 'Neon', last_name: 'something?', nationality: 'Ne' },
];



@Component({
  selector: 'lib-data-library',
  templateUrl: './data-library.component.html',
  styleUrls: ['./data-library.component.css']
})

export class DataLibraryComponent implements OnInit {

  // @Input() cellContent;
  // @Input() headers;


  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  USER_DATA = [
    { title: 'Mr', first_name: 'Christopher', last_name: 'Hoffman', nationality: 'United States' },
    { title: 'Mrs', first_name: 'Ruth', last_name: 'Baily', nationality: 'He' },
    { title: 'Mrs', first_name: 'Esmira', last_name: 'Hüseynzada', nationality: 'Azerbaijan' },
    { title: 'Mrs', first_name: 'Azerbaijan', last_name: 'something?', nationality: 'Be' },
    { title: 'Mss', first_name: 'Boron', last_name: 'something?', nationality: 'B' },
    { title: 'Mrs', first_name: 'Carbon', last_name: 'something?', nationality: 'C' },
    { title: 'Mrs', first_name: 'Nitrogen', last_name: 'something?', nationality: 'N' },
    { title: 'Mr', first_name: 'Oxygen', last_name: 'something?', nationality: 'O' },
    { title: 'Mr', first_name: 'Fluorine', last_name: 'something?', nationality: 'F' },
    { title: 'Mrs', first_name: 'Neon', last_name: 'something?', nationality: 'Ne' },
  ];


  displayedColumns: string[] = ['title', 'first_name', 'last_name', 'nationality'];
  // dataSource = new MatTableDataSource(USER_DATA);


  ngOnInit() {

    console.log('data??');
    console.log(USER_DATA);
    console.log('data??');
    // this.dataSource.sort = this.sort;
  }


}
