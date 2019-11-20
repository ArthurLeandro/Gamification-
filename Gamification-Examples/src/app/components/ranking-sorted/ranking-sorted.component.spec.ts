import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingSortedComponent } from './ranking-sorted.component';

describe('RankingSortedComponent', () => {
  let component: RankingSortedComponent;
  let fixture: ComponentFixture<RankingSortedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingSortedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
