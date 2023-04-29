import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyupComponent } from './keyup.component';

describe('KeyupComponent', () => {
  let component: KeyupComponent;
  let fixture: ComponentFixture<KeyupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
