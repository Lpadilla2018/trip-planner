import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDataViewComponent } from './google-data-view.component';

describe('GoogleDataViewComponent', () => {
  let component: GoogleDataViewComponent;
  let fixture: ComponentFixture<GoogleDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
