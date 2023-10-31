import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcducComponent } from './procduc.component';

describe('ProcducComponent', () => {
  let component: ProcducComponent;
  let fixture: ComponentFixture<ProcducComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcducComponent]
    });
    fixture = TestBed.createComponent(ProcducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
