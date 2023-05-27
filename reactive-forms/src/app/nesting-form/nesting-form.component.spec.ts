import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingFormComponent } from './nesting-form.component';

describe('NestingFormComponent', () => {
  let component: NestingFormComponent;
  let fixture: ComponentFixture<NestingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
