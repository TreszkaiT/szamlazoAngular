import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamlaNewComponent } from './szamla-new.component';

describe('SzamlaNewComponent', () => {
  let component: SzamlaNewComponent;
  let fixture: ComponentFixture<SzamlaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzamlaNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzamlaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
