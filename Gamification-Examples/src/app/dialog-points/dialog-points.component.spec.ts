import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPointsComponent } from './dialog-points.component';

describe('DialogPointsComponent', () => {
  let component: DialogPointsComponent;
  let fixture: ComponentFixture<DialogPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
