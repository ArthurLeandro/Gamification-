import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducoinComponent } from './educoin.component';

describe('EducoinComponent', () => {
  let component: EducoinComponent;
  let fixture: ComponentFixture<EducoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
