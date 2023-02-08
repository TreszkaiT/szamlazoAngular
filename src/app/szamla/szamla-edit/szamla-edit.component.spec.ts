import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamlaEditComponent } from './szamla-edit.component';

describe('SzamlaEditComponent', () => {
  let component: SzamlaEditComponent;
  let fixture: ComponentFixture<SzamlaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzamlaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzamlaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
