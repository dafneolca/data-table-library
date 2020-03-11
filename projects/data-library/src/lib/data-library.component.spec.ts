import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLibraryComponent } from './data-library.component';

describe('DataLibraryComponent', () => {
  let component: DataLibraryComponent;
  let fixture: ComponentFixture<DataLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
