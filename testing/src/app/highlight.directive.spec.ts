import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<AppComponent>
  beforeEach(() => {
  fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, HighlightDirective],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .createComponent(AppComponent)
    fixture.detectChanges()

  })
  it('should create an instance', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });

  it("should have skyblue <h1>", () => {
   
    const h1: HTMLElement = fixture.nativeElement.querySelector("h1")
    const bgColor = h1.style.backgroundColor
    expect(bgColor).toBe('skyblue')
  })
});
