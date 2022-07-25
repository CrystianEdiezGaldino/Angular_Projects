import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponetComponent } from './first-componet.component';

describe('FirstComponetComponent', () => {
  let component: FirstComponetComponent;
  let fixture: ComponentFixture<FirstComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
