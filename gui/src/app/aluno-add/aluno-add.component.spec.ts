import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAddComponent } from './aluno-add.component';

describe('AlunoAddComponent', () => {
  let component: AlunoAddComponent;
  let fixture: ComponentFixture<AlunoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
