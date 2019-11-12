import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingResourcesComponent } from './ranking-resources.component';

describe('RankingResourcesComponent', () => {
  let component: RankingResourcesComponent;
  let fixture: ComponentFixture<RankingResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
