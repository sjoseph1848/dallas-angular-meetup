import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsCardListComponent } from './flights-card-list.component';

describe('FlightsCardListComponent', () => {
  let component: FlightsCardListComponent;
  let fixture: ComponentFixture<FlightsCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
