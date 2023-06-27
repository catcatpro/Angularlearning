import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterableComponent } from './routerable.component';

describe('RouterableComponent', () => {
  let component: RouterableComponent;
  let fixture: ComponentFixture<RouterableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
