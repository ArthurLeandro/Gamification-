import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingLecturePlanComponent } from './ranking-lecture-plan.component';

describe('RankingLecturePlanComponent', () => {
  let component: RankingLecturePlanComponent;
  let fixture: ComponentFixture<RankingLecturePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingLecturePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingLecturePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
