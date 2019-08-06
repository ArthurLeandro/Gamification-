import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputacaoComponent } from './reputacao.component';

describe('ReputacaoComponent', () => {
  let component: ReputacaoComponent;
  let fixture: ComponentFixture<ReputacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
