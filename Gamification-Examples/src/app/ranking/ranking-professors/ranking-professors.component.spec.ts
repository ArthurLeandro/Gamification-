import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingProfessorsComponent } from './ranking-professors.component';

describe('RankingProfessorsComponent', () => {
  let component: RankingProfessorsComponent;
  let fixture: ComponentFixture<RankingProfessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingProfessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
