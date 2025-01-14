import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogofComponent } from './logof.component';

describe('LogofComponent', () => {
  let component: LogofComponent;
  let fixture: ComponentFixture<LogofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
