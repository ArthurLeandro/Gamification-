import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingTeachingMethodComponent } from './ranking-teaching-method.component';

describe('RankingTeachingMethodComponent', () => {
  let component: RankingTeachingMethodComponent;
  let fixture: ComponentFixture<RankingTeachingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingTeachingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingTeachingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
