import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingActivityComponent } from './ranking-activity.component';

describe('RankingActivityComponent', () => {
  let component: RankingActivityComponent;
  let fixture: ComponentFixture<RankingActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
