import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParnerComponent } from './parner.component';

describe('ParnerComponent', () => {
  let component: ParnerComponent;
  let fixture: ComponentFixture<ParnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
