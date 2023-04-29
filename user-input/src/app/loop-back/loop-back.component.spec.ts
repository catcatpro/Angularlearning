import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopBackComponent } from './loop-back.component';

describe('LoopBackComponent', () => {
  let component: LoopBackComponent;
  let fixture: ComponentFixture<LoopBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
