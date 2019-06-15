import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshBoardComponent } from './desh-board.component';

describe('DeshBoardComponent', () => {
  let component: DeshBoardComponent;
  let fixture: ComponentFixture<DeshBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeshBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
