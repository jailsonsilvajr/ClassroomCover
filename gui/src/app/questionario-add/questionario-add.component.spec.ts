import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioAddComponent } from './questionario-add.component';

describe('QuestionarioAddComponent', () => {
  let component: QuestionarioAddComponent;
  let fixture: ComponentFixture<QuestionarioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
